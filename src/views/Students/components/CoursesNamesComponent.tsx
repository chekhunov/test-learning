import React from 'react'
import { Link } from '@mui/material'

import Text from '~/components/base/Text'
import ROUTES from '~/utils/constants/routes'

interface CoursesNamesComponentProps {
  active_courses_data: { id: number; name: string }[]
}

const CoursesNamesComponent = ({
  active_courses_data
}: CoursesNamesComponentProps): JSX.Element => {
  return (
    <>
      {active_courses_data?.map(({ id, name }) => (
        <Link key={id} href={ROUTES.courses + '/' + id} underline="hover">
          <Text size={{ xs: 'body2' }}>{name}</Text>
        </Link>
      ))}
    </>
  )
}

export default CoursesNamesComponent
