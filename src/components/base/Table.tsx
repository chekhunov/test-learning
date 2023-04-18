import React from 'react'

import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Theme,
  useMediaQuery
} from '@mui/material'
import { useTable } from 'react-table'

// import useAuth from '~/services/Auth/useAuth'

import Text from './Text'

interface TableProps {
  data: any
  columns: any
}

const Table = ({ columns, data }: TableProps) => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  })

  return (
    <MuiTable {...getTableProps()}>
      {!isMobile && (
        <TableHead>
          {headerGroups.map((headerGroup, idx) => {
            return (
              <TableRow {...headerGroup.getHeaderGroupProps()} key={idx}>
                {headerGroup.headers.map((column) => {
                  return (
                    <TableCell
                      {...column.getHeaderProps()}
                      sx={{
                        py: 0.9,
                        px: 0.5,
                        minWidth: column.minWidth,
                        width: column.width
                      }}
                      key={column.id}
                    >
                      <Text size={{ xs: 'body2' }} fontWeight={600}>
                        {column.render('Header')}
                      </Text>
                    </TableCell>
                  )
                })}
              </TableRow>
            )
          })}
        </TableHead>
      )}
      <TableBody>
        {rows.map((row) => {
          prepareRow(row)
          return isMobile ? (
            <MobileTableRow row={row} key={row.id} />
          ) : (
            <DesktopTableRow row={row} key={row.id} />
          )
        })}
      </TableBody>
    </MuiTable>
  )
}

export default Table

const DesktopTableRow = ({ row }) => {
  // const {
  //   roles,
  //   selectors: { hasRole }
  // } = useAuth()

  // const isView = hasRole(roles.cake_maker) && !row.original.viewed

  return (
    <TableRow
      {...row.getRowProps()}
      key={row.id}
      sx={{ backgroundColor: '#F9F9FD' }}
    >
      {row.cells.map((cell) => {
        return (
          <TableCell
            {...cell.getCellProps()}
            sx={{
              py: 0.9,
              px: 0.5,
              minWidth: cell.column.minWidth,
              width: cell.column.width,
              wordBreak: 'break-all'
            }}
            key={cell.column.id}
          >
            {cell.render('Cell')}
          </TableCell>
        )
      })}
    </TableRow>
  )
}

const MobileTableRow = ({ row }) => {
  // const {
  //   roles,
  //   selectors: { hasRole }
  // } = useAuth()

  // const isView = hasRole(roles.cake_maker) && !row.original.viewed

  return (
    <TableRow
      {...row.getRowProps()}
      key={row.id}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 500,
        mx: 'auto',
        borderBottom: '1px solid',
        borderBottomColor: 'stroke.main',
        backgroundColor: '#F9F9FD',

        '&:first-of-type': {
          borderTop: '1px solid',
          borderTopColor: 'stroke.main'
        }
      }}
    >
      {row.cells.map((cell) => {
        return (
          <TableCell
            {...cell.getCellProps()}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              borderBottom: 'none',
              py: 0.9,
              px: 0.5,
              order: cell.column.order,
              wordBreak: 'break-all'
            }}
            key={cell.column.id}
          >
            {cell.column.Header && (
              <Text size={{ xs: 'body2' }} fontWeight={600} minWidth={140}>
                {cell.render('Header')}
              </Text>
            )}
            {cell.render('Cell')}
          </TableCell>
        )
      })}
    </TableRow>
  )
}
