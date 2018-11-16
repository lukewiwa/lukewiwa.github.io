import React from 'react'
import { withRouteData } from 'react-static'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { Title } from '../styles/Styled'
//

const headers = [
  { Header: 'Apparatus', accessor: 'app', maxWidth: 150 },
  { Header: 'EG', accessor: 'eg', maxWidth: 40, style: {textAlign: 'right'} },
  { Header: 'Value', accessor: 'value', maxWidth: 70},
  { Header: 'Description', accessor: 'description' },
]

export default withRouteData(({ magTable }) => (
  <div className="flex-center">
    <div className="container-wider">
      <Title>MAG 2020</Title>
      <ReactTable data={magTable} columns={headers} />
    </div>
  </div>
))
