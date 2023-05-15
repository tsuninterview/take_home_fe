import React from 'react'
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'
import { useSelector } from 'react-redux'

export default function DataTable(props) {
  const productions = useSelector((state) => state.productions)
  const demands = useSelector((state) => state.demands)
  const columnsDemand = [
    {
      Header: 'Total',
      accessor: 'total',
      Cell: (row) => <div class='text-center'>{row.value}</div>,
    },
    {
      Header: 'Date',
      accessor: 'date',
      Cell: (row) => <div class='text-center'>{row.value}</div>,
    },
  ]

  const columnsProduction = [
    {
      Header: 'Total',
      accessor: 'total',
      Cell: (row) => <div class='text-center'>{row.value}</div>,
    },
    {
      Header: 'Hydraulique',
      accessor: 'hydro',
      Cell: (row) => <div class='text-center'>{row.value}</div>,
    },
    {
      Header: 'Eolien',
      accessor: 'wind',
      Cell: (row) => <div class='text-center'>{row.value}</div>,
    },
    {
      Header: 'Solaire',
      accessor: 'solar',
      Cell: (row) => <div class='text-center'>{row.value}</div>,
    },
    {
      Header: 'Thermique',
      accessor: 'thermal',
      Cell: (row) => <div class='text-center'>{row.value}</div>,
    },
    {
      Header: 'Autres',
      accessor: 'other',
      Cell: (row) => <div class='text-center'>{row.value}</div>,
    },
    {
      Header: 'Date',
      accessor: 'date',
      Cell: (row) => <div class='text-center'>{row.value}</div>,
    },
  ]

  const dataDemand = () => {
    return demands.demands.details?.map((element) => {
      return {
        total: element.valeurs?.demandeTotal,
        date: element.date,
      }
    })
  }

  const dataProduction = () => {
    return productions.productions.details?.map((element) => {
      return {
        total: element.valeurs?.total,
        hydro: element.valeurs?.hydraulique,
        wind: element.valeurs?.eolien,
        solar: element.valeurs?.solaire,
        thermal: element.valeurs?.thermique,
        other: element.valeurs?.autres,
        date: formatDate(element.date),
      }
    })
  }

  const formatDate = (date) => {
    let formattedDate = new Date(date)
    return formattedDate.toISOString().substring(0, 10)
  }

  const currentData =
    props.currentTab === 'productions' ? dataProduction() : dataDemand()
  const currentColumn =
    props.currentTab === 'productions' ? columnsProduction : columnsDemand
  return (
    <>
      <ReactTable
        data={currentData}
        columns={currentColumn}
        minRows={10}
        className='-striped -highlight'
        showPagination={true}
        defaultPageSize={10}
      />
    </>
  )
}
