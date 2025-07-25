import * as React from "react";
import { PieChart } from "@mui/x-charts";

const valueFormatter = (item) => `${item.value}%`;

const desktopOS = [
  {
    label: "Windows",
    value: 72.72,
  },
  {
    label: "OS X",
    value: 16.38,
  },
  {
    label: "Linux",
    value: 3.83,
  },
  {
    label: "Chrome OS",
    value: 2.42,
  },
  {
    label: "Other",
    value: 4.65,
  },
];

function PieChartComponent() {
  return (
    <PieChart
      series={[
        {
          data: desktopOS,
          highlightScope: { fade: "global", highlight: "item" },
          faded: {
            innerRadius: 30,
            additionalRadius: -30,
            color: "var(--secondary-text)",
          },
          valueFormatter,
        },
      ]}
      height={250}
      width={250}
      slotProps={{
        legend: {
          sx: {
            color: "var(--primary-text)",
          },
        },
      }}
    />
  );
}

export default PieChartComponent;
