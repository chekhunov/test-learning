import React from 'react'
import { Link } from '@mui/material'

import Text from '~/components/base/Text'
import ROUTES from '~/utils/constants/routes'

interface ModulesNamesComponentProps {
  active_modules_data: { id: number; course_id: number; name_module: string }[]
}

const ModulesNamesComponent = ({
  active_modules_data
}: ModulesNamesComponentProps): JSX.Element => {
  return (
    <>
      {active_modules_data?.map(({ id, course_id, name_module }) => (
        <Link
          key={id}
          href={ROUTES.courses + '/' + course_id}
          underline="hover"
        >
          <Text size={{ xs: 'body2' }}>{name_module}</Text>
        </Link>
      ))}
    </>
  )
}

export default ModulesNamesComponent
