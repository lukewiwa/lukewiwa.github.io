import React from 'react'
import { withRouteData } from 'react-static'
import ReactTable from 'react-table'
import { Title } from '../styles/Styled'
//

const headers = [
  {
    Header: 'Code',
    columns: [
      { Header: 'id', accessor: 'id' },
      { Header: 'app', accessor: 'app' },
      { Header: 'eg', accessor: 'eg' },
      { Header: 'value', accessor: 'value' },
      { Header: 'index', accessor: 'index' },
      { Header: 'description', accessor: 'description' },
    ],
  },
]

export default withRouteData(({ magTable }) => (
  <div className="flex-center">
    <div className="container-wider">
      <Title>MAG 2020</Title>
      <ReactTable data={magTable} columns={headers} />
    </div>
  </div>
))
