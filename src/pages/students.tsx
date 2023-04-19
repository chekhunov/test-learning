import React, { ReactElement } from 'react'
import { NextPageExtended } from '~/types/interfaces/nextjs'
import MainLayout from '~/layouts/MainLayout'
import StudentsView from '~/views/Students'

const StudentsViewPage: NextPageExtended = () => {
  return <StudentsView />
}

StudentsViewPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

StudentsViewPage.getMeta = () => ({
  title: 'Students',
  description: 'Table of Students',
  canonical: 'students'
})

export default StudentsViewPage
