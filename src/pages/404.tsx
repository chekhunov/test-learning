import React from 'react'

import MainLayout from '~/layouts/MainLayout'
import NotFoundView from '~/views/404'

const NotFoundPage = () => {
  return <NotFoundView />
}

NotFoundPage.getLayout = (page: React.ReactNode) => (
  <MainLayout>{page}</MainLayout>
)

export default NotFoundPage
