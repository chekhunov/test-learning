import { makeAutoObservable } from 'mobx'

export default class SoundStore {
  _isPlaying: boolean
  // _isPlaying: boolean
  // private _file:{}

  constructor() {
    this._isPlaying = false
    // this._file = {}
    makeAutoObservable(this)
  }

  //actions
  setIsPlaying(bool) {
    this._isPlaying = bool
  }
  // setUser(file) {
  //   this._file = file
  // }

  //getters
  get isAuth() {
    return this._isPlaying
  }
  // get user() {
  //   return this._file
  // }
}
