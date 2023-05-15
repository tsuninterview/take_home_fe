import React from "react";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import zoomPlugin, { zoom } from 'chartjs-plugin-zoom';
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
    zoom: {
        pan: {
            enabled: true,
            mode: 'x'
        },
        zoom: {
            pinch: {
                enabled: true       // Enable pinch zooming
            },
            wheel: {
                enabled: true       // Enable wheel zooming
            },
            mode: 'x',
        }
    }
  },
};

//   const labels = [];
export const labelsBarChart = (length) => {
  const labels = [];
  for (let i = 1; i <= length; i++) {
    labels.push(`group${i}`);
  }
  return labels;
};
export const dataBarChart = (data, currentTab = "productions") => {
  const currentData = data[currentTab]?.details;
  const labels = labelsBarChart(currentData.length);
  if (currentTab === "productions") {
    return {
      labels: labels,
      datasets: [
        {
          label: "Total",
          data: currentData?.map((element) => element.valeurs?.total),
          backgroundColor: "rgba(255,206, 86, 1)",
        },
        {
          label: "Hydraulique",
          data: currentData?.map((element) => element.valeurs?.hydraulique),
          backgroundColor: "rgba(255, 99, 132, 1)",
        },
        {
          label: "Eolien",
          data: currentData?.map((element) => element.valeurs?.eolien),
          backgroundColor: "rgba(54, 162, 235, 1)",
        },
        {
          label: "Solaire",
          data: currentData?.map((element) => element.valeurs?.solaire),
          backgroundColor: "rgba(255, 255, 0, 1)",
        },
        {
          label: "Thermique",
          data: currentData?.map((element) => element.valeurs?.thermique),
          backgroundColor: "rgba(75, 192, 192, 1)",
        },
        {
          label: "Autres",
          data: currentData?.map((element) => element.valeurs?.autres),
          backgroundColor: "rgba(153, 102, 255, 1)",
        },
      ],
    };
  } else if (currentTab === "demands") {
    return {
      labels,
      datasets: [
        {
          label: "Total",
          data: currentData?.map((element) => element.valeurs?.demandeTotal),
          backgroundColor: "rgba(255,206, 86, 1)",
        },
      ],
    };
  }
};

export default function DataBarChart(props) {
  const productions = useSelector((state) => state.productions);
  const demands = useSelector((state) => state.demands);
  return demands.isLoadingCompleted ? (
    <Bar options={options} data={dataBarChart(demands, "demands")} />
  ) : (
    <div>loading...</div>
  );
}
