import React from 'react'
import { useEffect, useState } from 'react'
import { fetchDemand } from './services/Demand/demand'
import { fetchProduction } from './services/Production/production'
import DataTable from './components/Table/DataTable'
import DataPieChart from './components/Charts/DataPieChart'
import DataBarChart from './components/Charts/DataBarChart'
import Header from './components/Header/Header'
function App() {
  const [currentTab, setCurrentTab] = useState('production')

  useEffect(() => {
    fetchDemand()
    fetchProduction()
  })

  const handleCurrentTab = (tab) => {
    setCurrentTab(tab)
  }

  return (
    <div className='flex flex-col justify-center m-12'>
      <Header handleCurrentTab={handleCurrentTab} />
      <div>
        <DataTable currentTab={currentTab} />
      </div>
      <div className='flex flex-row w-1/2 my-8'>
        <DataPieChart className='w-full' currentTab={currentTab} />
        <DataBarChart className='w-full' currentTab={currentTab} />
      </div>
    </div>
  )
}

export default App
