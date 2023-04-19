import { makeAutoObservable } from 'mobx'

export default class StudentsStore {
  private _students: {
    id: number
    student: {
      id: string
      first_name: string
      last_name: string
      active_courses: { id: number; name: string }[]
      active_modules: { id: number; course_id: number; name_module: string }[]
      active_lessons: {
        id: number
        course_id: number
        module_id: number
        name_lesson: string
      }[]
      progress: {
        course_id: number
        name: string
        progress: number
      }[]
    }
  }[]
  private _page: number
  private _totalCount: number
  private _limit: number
  private _isLoading: boolean
  private _sortActiveColumn: string
  constructor() {
    this._isLoading = false
    this._sortActiveColumn = ''
    this._students = []
    this._page = 1
    this._totalCount = 0
    this._limit = 3
    makeAutoObservable(this)
  }

  setIsLoading(bool) {
    this._isLoading = bool
  }
  setSortActiveColumn(number) {
    this._isLoading = number
  }
  setStudents(students) {
    this._students = students
  }
  setPage(page) {
    this._page = page
  }
  setTotalCount(count) {
    this._totalCount = count
  }

  get isLoading() {
    return this._isLoading
  }
  get sortActiveColumn() {
    return this._sortActiveColumn
  }
  get students() {
    return this._students
  }

  get totalCount() {
    return this._totalCount
  }
  get page() {
    return this._page
  }
  get limit() {
    return this._limit
  }
}
