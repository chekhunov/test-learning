import { $host } from './index'

const STUDENTS_API = 'https://643c5095f0ec48ce9042126e.mockapi.io/students'

export const fetchStudents = async (page, limit = 5) => {
  const { data } = await $host.get(STUDENTS_API, {
    params: {
      page,
      limit
    }
  })

  return data
}

export const fetchStudent = async (id) => {
  const { data } = await $host.get(STUDENTS_API + id)
  return data
}
