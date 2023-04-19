import React from 'react'

import Text from '~/components/base/Text'
import ROUTES from '~/utils/constants/routes'
import { Stack } from '@mui/system'

interface ProgressComponentProps {
  progress: { course_id: number; name: string; progress: number }[]
}

const ProgressComponent = ({
  progress
}: ProgressComponentProps): JSX.Element => {
  return (
    <>
      {progress?.map(({ course_id, name, progress }) => (
        <Stack key={course_id}>
          <Text size={{ xs: 'body2' }}>{progress}%</Text>
        </Stack>
      ))}
    </>
  )
}

export default ProgressComponent
