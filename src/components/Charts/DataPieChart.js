import React from 'react'
import { useSelector } from 'react-redux'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { sumCategories, getLabelsChart } from '../Utils/countCategories'

ChartJS.register(ArcElement, Tooltip, Legend)
export const options = {
  responsive: true,
  maintainAspectRatio: false,
}

export const dataPieChart = (data, currentTab = 'production') => {
  const currentData = sumCategories(data, currentTab)
  const labels = getLabelsChart(currentTab)
  const valueByCategories = Object.values(currentData)
  const backgroundColor =
    currentTab === 'production'
      ? [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ]
      : ['rgba(255, 99, 132, 0.2)']
  const borderColor =
    currentTab === 'production'
      ? [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ]
      : ['rgba(255, 99, 132, 1)']
  return {
    labels,
    datasets: [
      {
        data: valueByCategories,
        backgroundColor,
        borderColor,
        borderWidth: 1,
      },
    ],
  }
}

export default function DataPieChart(props) {
  const production = useSelector((state) => state.production)
  const demand = useSelector((state) => state.demand)
  const currentData = props.currentTab === 'production' ? production : demand
  return currentData.isLoadingCompleted ? (
    <Pie options={options} height={'100%'} data={dataPieChart(currentData, props.currentTab)} />
  ) : (
    <div>Loading...</div>
  )
}
