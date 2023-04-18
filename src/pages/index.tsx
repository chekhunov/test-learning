import { ReactElement } from 'react'

import MainLayout from '~/layouts/MainLayout'
import HomePageView from '~/views/Home/Home.view'

import { NextPageExtended } from '~/types/interfaces/nextjs'

const HomePage: NextPageExtended = () => {
  return <HomePageView />
}

HomePage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

HomePage.getMeta = () => ({
  title: 'Test-LEARNING',
  description: 'project - description'
})

export default HomePage
