import dynamic from 'next/dynamic'
import React, { FC, useState } from 'react'

import { Box, BoxProps } from '@mui/material'
import LazyHydrate from 'react-lazy-hydration'

import Header from './Header'
import Sound from '~/components/elements/Sound'

const Footer = dynamic(() => import('./Footer'))

import SoundStore from '~/store/Sound.store'

interface MainLayoutProps {
  hideHeader?: boolean
  hideFooter?: boolean
  children: React.ReactNode
}

interface LayoutContextPropsValues {
  setSx: React.Dispatch<React.SetStateAction<BoxProps['sx']>>
  sound: SoundStore
}

export const LayoutContext = React.createContext<LayoutContextPropsValues>(
  {} as LayoutContextPropsValues
)

const MainLayout: FC<MainLayoutProps> = ({
  children,
  hideFooter,
  hideHeader
}) => {
  const [sx, setSx] = useState<BoxProps['sx']>({})

  return (
    <LayoutContext.Provider value={{ setSx, sound: new SoundStore() }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          minHeight: '100vh',
          ...sx
        }}
      >
        {!hideHeader && <Header />}

        <Box component="main" display="flex" flexDirection="column">
          {children}
        </Box>
        <Sound />

        {!hideFooter && (
          <LazyHydrate whenVisible>
            <Footer />
          </LazyHydrate>
        )}
      </Box>
    </LayoutContext.Provider>
  )
}

export default MainLayout
