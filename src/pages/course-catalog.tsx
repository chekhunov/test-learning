import React, { ReactElement } from 'react'
import { NextPageExtended } from '~/types/interfaces/nextjs'
import MainLayout from '~/layouts/MainLayout'
import CourseCatalog from '~/views/CourseCatalog'

const CourseCatalogPage: NextPageExtended = () => {
  return <CourseCatalog />
}

CourseCatalogPage.getLayout = (page: ReactElement) => (
  <MainLayout>{page}</MainLayout>
)

CourseCatalogPage.getMeta = () => ({
  title: 'Course-Catalog',
  description: 'Course catalog',
  canonical: 'course-catalog'
})

export default CourseCatalogPage
