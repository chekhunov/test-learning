import React, { PropsWithChildren } from 'react'

import MainLayout from '~/layouts/MainLayout'
import NotFoundView from '~/views/404'

const NotFoundPage = () => {
  return <NotFoundView />
}

NotFoundPage.getLayout = (page: PropsWithChildren) => (
  <MainLayout>{page}</MainLayout>
)

export default NotFoundPage
