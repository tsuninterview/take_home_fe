import React from 'react'
import { useEffect, useState } from 'react'
import { fetchDemand } from './services/Demand/demand'
import { fetchProduction } from './services/Production/production'
import DataTable from './components/Table/DataTable'
import DataPieChart from './components/Charts/DataPieChart'
import DataBarChart from './components/Charts/DataBarChart'
function App() {
  const [currentTab, setCurrentTab] = useState('productions')
  useEffect(() => {
    fetchDemand()
    fetchProduction()
  })

  const handleCurrentTab = (tab) => {
    setCurrentTab(tab)
  }

  return (
    <div className='flex flex-col justify-center m-12'>
      <div className='flex mb-2'>
        <button
          className='border-2 border-slate-400 w-fit px-2 mr-2'
          onClick={() => handleCurrentTab('productions')}
        >
          production
        </button>
        <button
          className='border-2 border-slate-400 w-fit px-2'
          onClick={() => handleCurrentTab('demands')}
        >
          demand
        </button>
      </div>
      <div>
        <DataTable currentTab={currentTab} />
      </div>
      <div className='flex flex-row w-1/2 my-8'>
        <DataPieChart className='w-full h-1/8' currentTab={currentTab} />
        <DataBarChart className='w-full' currentTab={currentTab} />
      </div>
    </div>
  )
}

export default App
