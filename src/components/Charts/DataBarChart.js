import React from 'react'
import { useSelector } from 'react-redux'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import zoomPlugin from 'chartjs-plugin-zoom'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
)
// config for bar chart
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    zoom: {
      pan: {
        enabled: true,
        mode: 'x',
      },
      zoom: {
        pinch: {
          enabled: true, // Enable pinch zooming
        },
        wheel: {
          enabled: true, // Enable wheel zooming
        },
        mode: 'x',
      },
    },
  },
  maintainAspectRatio: false,
}
// group label names to be displayed on x-axis
export const labelsBarChart = (length) => {
  const labels = []
  for (let i = 1; i <= length; i++) {
    labels.push(`group${i}`)
  }
  return labels
}
// set up data and labels/color for bar chart
export const dataBarChart = (data, currentTab = 'production') => {
  const currentData = data[currentTab]?.details
  const labels = labelsBarChart(currentData.length)
  if (currentTab === 'production') {
    return {
      labels: labels,
      datasets: [
        {
          label: 'Total',
          data: currentData?.map((element) => element.valeurs?.total),
          backgroundColor: 'rgba(255,206, 86, 1)',
        },
        {
          label: 'Hydraulique',
          data: currentData?.map((element) => element.valeurs?.hydraulique),
          backgroundColor: 'rgba(255, 99, 132, 1)',
        },
        {
          label: 'Eolien',
          data: currentData?.map((element) => element.valeurs?.eolien),
          backgroundColor: 'rgba(54, 162, 235, 1)',
        },
        {
          label: 'Solaire',
          data: currentData?.map((element) => element.valeurs?.solaire),
          backgroundColor: 'rgba(255, 255, 0, 1)',
        },
        {
          label: 'Thermique',
          data: currentData?.map((element) => element.valeurs?.thermique),
          backgroundColor: 'rgba(75, 192, 192, 1)',
        },
        {
          label: 'Autres',
          data: currentData?.map((element) => element.valeurs?.autres),
          backgroundColor: 'rgba(153, 102, 255, 1)',
        },
      ],
    }
  } else if (currentTab === 'demand') {
    return {
      labels,
      datasets: [
        {
          label: 'Total',
          data: currentData?.map((element) => element.valeurs?.demandeTotal),
          backgroundColor: 'rgba(255,206, 86, 1)',
        },
      ],
    }
  }
}

export default function DataBarChart(props) {
  const production = useSelector((state) => state.production)
  const demand = useSelector((state) => state.demand)
  const currentData = props.currentTab === 'production' ? production : demand
  return currentData.isLoadingCompleted ? (
    <Bar options={options} height={'400%'} data={dataBarChart(currentData, props.currentTab)} />
  ) : (
    <div>loading...</div>
  )
}
