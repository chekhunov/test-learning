import React, { useContext } from 'react'
import { Pagination, Stack } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { LayoutContext } from '~/layouts/MainLayout'

const TablePagination: React.FC = observer(() => {
  const { students_data } = useContext(LayoutContext)
  const pageCount = Math.ceil(students_data.totalCount / students_data.limit)
  const pages: number[] = []

  for (let i: number = 0; i < pageCount; i++) {
    pages.push(i + 1)
  }

  return (
    <Stack alignItems="center" mt={3}>
      <Pagination
        page={students_data.page}
        onChange={(event: React.ChangeEvent<unknown>, value: number) =>
          students_data.setPage(value)
        }
        count={pageCount}
      />
    </Stack>
  )
})

export default TablePagination
