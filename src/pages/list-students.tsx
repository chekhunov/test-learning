import React, { ReactElement } from 'react'
import { NextPageExtended } from '~/types/interfaces/nextjs'
import MainLayout from '~/layouts/MainLayout'
import ListStudents from '~/views/ListStudents'

const ListStudentsPage: NextPageExtended = () => {
  return <ListStudents />
}

ListStudentsPage.getLayout = (page: ReactElement) => (
  <MainLayout>{page}</MainLayout>
)

ListStudentsPage.getMeta = () => ({
  title: 'List Students',
  description: 'Table of Students',
  canonical: 'list-students'
})

export default ListStudentsPage
