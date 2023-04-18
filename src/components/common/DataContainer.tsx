import React, { FC } from 'react'

import { CircularProgress, BoxProps, Box } from '@mui/material'

import Text from '~/components/base/Text'

import Center from './Center'

interface DataContainerProps extends BoxProps {
  loading?: boolean
  empty?: boolean
  customEmpty?: React.ReactElement
  height?: string | number
}

const DataContainer: FC<DataContainerProps> = ({
  empty,
  loading,
  customEmpty,
  children,
  height = 400,
  ...props
}) => {
  if (loading || empty) {
    return (
      <Center height={height} {...props}>
        {loading && <CircularProgress size={50} />}
        {!loading && empty && (
          <Box>
            {customEmpty || <Text size={{ xs: 'h2' }}>No results found</Text>}
          </Box>
        )}
      </Center>
    )
  }

  return <>{children}</>
}

export default DataContainer
