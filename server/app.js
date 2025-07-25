import express from "express";
import bodyParser from "body-parser";
import envelopes from "./data/envelopes.js";
import { checkBody, checkId, checkEnvelopeUpdate } from "./utils/checkUtils.js";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/envelopes", (req, res, next) => {
  if (envelopes.length === 0) {
    return res.status(404).json({ message: "No envelopes found" });
  }
  next();
});

app.param("id", (req, res, next, id) => {
  const index = checkId(Number(id), envelopes);
  if (index === -1) {
    return res.status(404).json({ message: "Envelope not found" });
  }
  req.index = index;
  next();
});

app.get("/api/envelopes", (req, res, next) => {
  res.json(envelopes);
});

app.get("/api/envelopes/:id", (req, res, next) => {
  const index = req.index;
  res.json(envelopes[index]);
});

app.post("/api/envelopes", (req, res, next) => {
  const body = req.body;
  if (!checkBody(body)) {
    return res.status(400).json({ message: "Invalid body" });
  }
  const newEnvelope = {
    id: envelopes.length + 1,
    name: body.name,
    budget: body.budget,
    spent: 0,
  };
  envelopes.push(newEnvelope);
  res.status(201).json(newEnvelope);
});

app.put("/api/envelopes/:id", (req, res, next) => {
  const index = req.index;
  const body = req.body;
  if (!checkEnvelopeUpdate(body)) {
    return res.status(400).json({ message: "Invalid body" });
  }
  if (body.name) {
    envelopes[index].name = body.name;
  }
  if (body.budget) {
    envelopes[index].budget = body.budget;
  }
  if (body.spent) {
    envelopes[index].spent = body.spent;
  }
  res.status(200).json(envelopes[index]);
});

app.put("/api/envelopes/:id/spend", (req, res, next) => {
  const index = req.index;
  const body = req.body;
  if (!body.amount) {
    return res.status(400).json({ message: "Invalid body" });
  }
  const newSpent = envelopes[index].spent + body.amount;
  if (newSpent > envelopes[index].budget) {
    return res.status(400).json({ message: "Not enough budget" });
  }
  envelopes[index].spent = newSpent;
  res.status(200).json(envelopes[index]);
});

app.put("/api/envelopes/:id/addBudget", (req, res, next) => {
  const index = req.index;
  const body = req.body;
  if (!body.amount) {
    return res.status(400).json({ message: "Invalid body" });
  }
  envelopes[index].budget += body.amount;
  res.status(200).json(envelopes[index]);
});

app.delete("/api/envelopes/:id", (req, res, next) => {
  const index = req.index;
  envelopes.splice(index, 1);
  res.status(204).json();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
