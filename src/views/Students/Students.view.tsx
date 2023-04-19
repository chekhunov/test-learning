import React, { useContext, useEffect } from 'react'

import { Box, Stack } from '@mui/material'

import { useRouter } from 'next/router'
import { observer } from 'mobx-react-lite'
import Toastr from '~/services/Toastr'

import { FormattedMessage, useIntl } from 'react-intl'
import msg from './Students.messages'

import DataContainer from '~/components/common/DataContainer'
import Table from '~/components/base/Table'
import TablePagination from '~/components/base/TablePagination'
import Title from '~/components/base/titlePage/Title'
import EmptyState from '~/components/base/EmptyState'

import ROUTES from '~/utils/constants/routes'

import useTableColumns from './Students.config'

import { LayoutContext } from '~/layouts/MainLayout'
import { fetchStudents } from '~/services/api/studentsApi'

const StudentsView = observer(() => {
  const { formatMessage } = useIntl()
  const router = useRouter()

  const { students_data } = useContext(LayoutContext)

  const { students, totalCount, page, isLoading } = students_data || {}

  const columns = useTableColumns()

  useEffect(() => {
    try {
      students_data.setIsLoading(true)
      fetchStudents(page, 5).then((data) => {
        students_data.setStudents(data)
        students_data.setTotalCount(data.length)
        students_data.setIsLoading(false)
      })
      // const interval = setInterval(fetchStudents, 6000)
      // return () => clearInterval(interval)
    } catch (error) {
      Toastr.error(error)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <Box maxWidth={900} sx={{ m: '0 auto' }}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        justifyContent="space-between"
        mb={{ xs: 2, md: 3 }}
      >
        <Title
          sx={{
            mt: 4,
            mb: { xs: 3, sm: 0 }
          }}
        >
          <FormattedMessage {...msg.title} />
        </Title>
      </Stack>

      <DataContainer
        customEmpty={
          <EmptyState
            hideButton
            text={formatMessage(msg.emptyStateMessage)}
          />
        }
        loading={isLoading}
        empty={totalCount < 1}
      >
        <Table data={students} columns={columns} />

        <TablePagination />
      </DataContainer>
    </Box>
  )
})

export default StudentsView
