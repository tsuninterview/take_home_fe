import React from "react";
import { useSelector } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { sumCategories, getLabelsChart } from "../Utils/countCategories";

ChartJS.register(ArcElement, Tooltip, Legend);

export const dataPieChart = (data, currentTab = "productions") => {
  const currentData = sumCategories(data, currentTab);
  const labels = getLabelsChart(currentTab);
  const valueByCategories = Object.values(currentData);
  const backgroundColor =
    currentTab === "productions"
      ? [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ]
      : ["rgba(255, 99, 132, 0.2)"];
  const borderColor =
    currentTab === "productions"
      ? [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ]
      : ["rgba(255, 99, 132, 1)"];
  return {
    labels,
    datasets: [
      {
        label: "power usage by subcategories",
        data: valueByCategories,
        backgroundColor,
        borderColor,
        borderWidth: 1,
      },
    ],
  };
};

export default function DataPieChart(props) {
  const productions = useSelector((state) => state.productions);
  const demands = useSelector((state) => state.demands);
  return demands.isLoadingCompleted ? (
    <Pie data={dataPieChart(demands, "demands")} />
  ) : (
    <div>Loading...</div>
  );
}
