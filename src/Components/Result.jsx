import * as React from 'react';
// import { useEffect, useState } from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { colNames } from '../utils/colNames';

export default function Result(props) {

  return (
    <TableContainer component={Paper} className="top-[30%] max-w-[640px] max-sm:max-w-[450px] max-h-[404px] absolute bottom-4 rounded-lg border border-solid border-[#EAECF0] shadow-t">
      <Table aria-label="simple table" stickyHeader>
        <TableHead >
          <TableRow>
            {colNames.map((colName) => (
              <TableCell sx={{backgroundColor : "#F9FAFB",borderBottom:"1px",borderColor:"#EAECF0"}} variant="head">{colName}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((prop) => (
            <TableRow
              key={prop.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <div className='flex flex-row items-center text-sm font-medium text-[#101828] non-italic'><img src={prop.image} alt={prop.firstName} width="40px" height="40px"/>&nbsp;{prop.firstName}&nbsp;{prop.lastName}</div>
              </TableCell>
              <TableCell>{prop.email}</TableCell>
              <TableCell>{prop.age}</TableCell>
              <TableCell>{prop.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}