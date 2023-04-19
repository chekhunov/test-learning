import React, { useContext, useEffect, useState } from 'react'

import { Box, Stack } from '@mui/material'

import { observer } from 'mobx-react-lite'
import Toastr from '~/services/Toastr'

import { FormattedMessage, useIntl } from 'react-intl'
import msg from './Students.messages'

import DataContainer from '~/components/common/DataContainer'
import Table from '~/components/base/Table'
import TablePagination from '~/components/base/TablePagination'
import Title from '~/components/base/titlePage/Title'
import EmptyState from '~/components/base/EmptyState'

import useTableColumns from './Students.config'

import { fetchStudents } from '~/services/api/studentsApi'
import { LayoutContext } from '~/layouts/MainLayout'

import { useStyles } from './Students.styles'

const StudentsView = observer(() => {
  const styles = useStyles()
  const { formatMessage } = useIntl()

  const defaultValue = { order: '', key: '' }

  const [sortColumn, setSortColumn] = useState(defaultValue)

  const { students_data } = useContext(LayoutContext)

  const { students, totalCount, page, isLoading } = students_data || {}

  const columns = useTableColumns()

  const byField = (field) => {
    return (a, b) => (a['student'][field] > b['student'][field] ? 1 : -1)
  }
  const filterData = (data) =>
    sortColumn.order ? data.sort(byField(sortColumn.key)) : data

  useEffect(() => {
    try {
      students_data.setIsLoading(true)
      fetchStudents(page, 5).then((data) => {
        students_data.setStudents(filterData(data))
        students_data.setTotalCount(data.length)
        students_data.setIsLoading(false)
      })
    } catch (error) {
      Toastr.error(error)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, sortColumn.order])

  return (
    <Box sx={styles.wrapper}>
      <Stack sx={styles.headline}>
        <Title>
          <FormattedMessage {...msg.title} />
        </Title>
      </Stack>

      <DataContainer
        customEmpty={
          <EmptyState hideButton text={formatMessage(msg.emptyStateMessage)} />
        }
        loading={isLoading}
        empty={totalCount < 1}
      >
        <Table
          data={students}
          columns={columns}
          sortColumn={sortColumn}
          setSortColumn={setSortColumn}
        />

        <TablePagination />
      </DataContainer>
    </Box>
  )
})

export default StudentsView
