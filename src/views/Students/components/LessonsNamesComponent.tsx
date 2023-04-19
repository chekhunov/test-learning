import React from 'react'
import { Link } from '@mui/material'

import Text from '~/components/base/Text'
import ROUTES from '~/utils/constants/routes'

interface LessonsNamesComponentProps {
  active_lessons_data: {
    id: number
    course_id: number
    module_id: number
    name_lesson: string
  }[]
}

const LessonsNamesComponent = ({
  active_lessons_data
}: LessonsNamesComponentProps): JSX.Element => {
  return (
    <>
      {active_lessons_data?.map(({ id, course_id, name_lesson }) => (
        <Link
          key={id}
          href={ROUTES.courses + '/' + course_id}
          underline="hover"
        >
          <Text size={{ xs: 'body2' }}>{name_lesson}</Text>
        </Link>
      ))}
    </>
  )
}

export default LessonsNamesComponent
