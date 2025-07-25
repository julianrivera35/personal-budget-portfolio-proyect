import * as React from "react";
import { BarChart } from "@mui/x-charts";

function valueFormatter(value) {
  return `${value} USD`;
}

const dataset = [
  {
    name: "Envelope 1",
    budget: 1000,
    spent: 500,
  },
  {
    name: "Envelope 2",
    budget: 2000,
    spent: 1000,
  },
  {
    name: "Envelope 3",
    budget: 3000,
    spent: 1500,
  },
  {
    name: "Envelope 4",
    budget: 4000,
    spent: 2000,
  },
  {
    name: "Envelope 5",
    budget: 5000,
    spent: 2500,
  },
  {
    name: "Envelope 6",
    budget: 6000,
    spent: 3000,
  },
  {
    name: "Envelope 7",
    budget: 7000,
    spent: 3500,
  },
  {
    name: "Envelope 8",
    budget: 8000,
    spent: 4000,
  },
  {
    name: "Envelope 9",
    budget: 9000,
    spent: 4500,
  },
  {
    name: "Envelope 10",
    budget: 10000,
    spent: 5000,
  },
  {
    name: "Envelope 11",
    budget: 1000,
    spent: 500,
  },
  {
    name: "Envelope 12",
    budget: 2000,
    spent: 1000,
  },
  {
    name: "Envelope 13",
    budget: 3000,
    spent: 1500,
  },
  {
    name: "Envelope 14",
    budget: 4000,
    spent: 2000,
  },
  {
    name: "Envelope 15",
    budget: 5000,
    spent: 2500,
  },
  {
    name: "Envelope 16",
    budget: 6000,
    spent: 3000,
  },
  {
    name: "Envelope 17",
    budget: 7000,
    spent: 3500,
  },
  {
    name: "Envelope 18",
    budget: 8000,
    spent: 4000,
  },
  {
    name: "Envelope 19",
    budget: 9000,
    spent: 4500,
  },
  {
    name: "Envelope 20",
    budget: 10000,
    spent: 5000,
  },
];

const charSettings = {
  yAxis: [
    {
      label: "Amount (USD)",
      labelStyle: {
        fill: "var(--primary-text)",
      },
      tickLabelStyle: {
        fill: "var(--primary-text)",
      },
    },
  ],
  xAxis: [
    {
      dataKey: "name",
      labelStyle: {
        fill: "var(--primary-text)", // X-axis label color
      },
      tickLabelStyle: {
        fill: "var(--primary-text)", // X-axis tick labels color
      },
    },
  ],
  height: 250,
};

export default function BarChartComponent() {
  return (
    <BarChart
      dataset={dataset}
      series={[
        { dataKey: "budget", label: "Budget", valueFormatter: valueFormatter },
        { dataKey: "spent", label: "Spent", valueFormatter: valueFormatter },
      ]}
      slotProps={{
        legend: {
          sx: {
            color: "var(--primary-text)",
          },
        },
      }}
      sx={{
        '& .MuiChartsAxis-left .MuiChartsAxis-line': {
          stroke: 'var(--primary-text)', // Y-axis line color
          strokeWidth: 2,
        },
        '& .MuiChartsAxis-bottom .MuiChartsAxis-line': {
          stroke: 'var(--primary-text)', // X-axis line color
          strokeWidth: 2,
        },
        '& .MuiChartsAxis-left .MuiChartsAxis-tick': {
          stroke: 'var(--primary-text)', // Y-axis tick color
          strokeWidth: 1,
        },
        '& .MuiChartsAxis-bottom .MuiChartsAxis-tick': {
          stroke: 'var(--primary-text)', // X-axis tick color
          strokeWidth: 1,
        },
      }}
      {...charSettings}
    />
  );
}
