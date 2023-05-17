import React from 'react'

/**
 * Header is responsible for displaying header of data visualization app
 * which includes tabs to set current datasets to production or demand.
 */
export default function Header(props) {
  return (
    <div >
      <div className='flex mb-2'>
        <button
          className='border-2 border-slate-400 w-fit px-2 mr-2'
          onClick={() => props.handleCurrentTab('production')}
        >
          production
        </button>
        <button
          className='border-2 border-slate-400 w-fit px-2'
          onClick={() => props.handleCurrentTab('demand')}
        >
          demand
        </button>
      </div>
    </div>
  )
}
