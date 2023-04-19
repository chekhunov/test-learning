export const getStudentDisplayName = (userData?: StudentModel) => {
  return (
    `${userData?.first_name} ${userData?.last_name}`
  )
}
