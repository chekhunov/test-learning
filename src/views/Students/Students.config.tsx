import React from 'react'

import { Link } from '@mui/material'
import Text from '~/components/base/Text'
import { getStudentDisplayName } from '~/utils/helpers/student.helpers'

import CoursesNamesComponent from './components/CoursesNamesComponent'
import ModulesNamesComponent from './components/ModulesNamesComponent'
import LessonsNamesComponent from './components/LessonsNamesComponent'
import ProgressComponent from './components/ProgressComponent'
import ROUTES from '~/utils/constants/routes'
import DetailsLinkComponent from './components/DetailsLinkComponent'

const useTableColumns = () => {
  const headerName = 'Student Full Name'

  const columns = React.useMemo(
    () => [
      {
        Header: headerName,
        accessor: 'student',
        minWidth: 150,
        Cell: ({ value }) => (
          <Link href={ROUTES.students + '/' + value.id} underline="hover">
            <Text size={{ xs: 'body2' }}>{getStudentDisplayName(value)}</Text>
          </Link>
        ),
        width: '30%',
        order: 1
      },
      {
        Header: 'Course Name',
        accessor: 'student.active_courses',
        Cell: ({ value }) => (
          <CoursesNamesComponent active_courses_data={value} />
        ),
        minWidth: 120,
        width: '30%',
        order: 2
      },
      {
        Header: 'Module Name',
        accessor: 'student.active_modules',
        Cell: ({ value }) => (
          <ModulesNamesComponent active_modules_data={value} />
        ),
        minWidth: 180,
        width: '20%',
        order: 3
      },
      {
        Header: 'Lesson Name',
        accessor: 'student.active_lessons',
        Cell: ({ value }) => (
          <LessonsNamesComponent active_lessons_data={value} />
        ),
        minWidth: 155,
        width: '15%',
        order: 4
      },
      {
        Header: 'Progress',
        accessor: 'student.progress',
        Cell: ({ value }) => <ProgressComponent progress={value} />,
        minWidth: 155,
        width: '15%',
        order: 5
      },
      {
        Header: 'Actions',
        accessor: 'id',
        Cell: ({ value }) => <DetailsLinkComponent id={Number(value)} />,
        minWidth: 155,
        width: '15%',
        order: 5
      }
    ],
    []
  )
  return columns
}

export default useTableColumns
