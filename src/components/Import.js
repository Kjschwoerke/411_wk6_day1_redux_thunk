import React from 'react'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'


const Import = (props) => {
    return (
    <>
        <Button onClick = {props.fetchMakes} variant="contained" color="primary">Import</Button>

      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>MAKE</TableCell>
            <TableCell>ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map(row => (
            <TableRow key={row.MakeId}>
              <TableCell>{row.MakeId}</TableCell>
              <TableCell>{row.MakeName}</TableCell>
              <TableCell>Actions Here</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
    )
}

export default Import