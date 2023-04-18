import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from '@mui/material'
import Head from 'next/head'
import theme from '~/theme'
import OfflineNotification from '~/containers/OfflineNotification'
import { Toaster } from 'react-hot-toast'
import useNetwork from '~/hooks/useNetwork'
import { DefaultSeo } from 'next-seo'
import { NextPageExtended } from '~/../src/types/interfaces/nextjs'
import NextSeo from '~/containers/NextSeo'
import LocalizedProvider from '~/containers/LocalizedProvider'


interface MyAppProps extends AppProps {
  Component: NextPageExtended
}

const MyApp: React.FunctionComponent<MyAppProps> = ({
  Component,
  pageProps
}: MyAppProps) => {
  const { isOffline, onClose } = useNetwork()

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
  const getMeta = Component.getMeta || ((meta = {}) => meta)

  const meta = getMeta()
  return (
    <>
      <DefaultSeo description="TP" />

      <LocalizedProvider>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=0"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Toaster position="top-center" reverseOrder={false} />

          {meta && <NextSeo {...meta} />}
          {getLayout(<Component {...pageProps} />)}

          {isOffline && (
            <OfflineNotification isOffline={isOffline} onClose={onClose} />
          )}
        </ThemeProvider>
      </LocalizedProvider>
    </>
  )
}

export default MyApp
