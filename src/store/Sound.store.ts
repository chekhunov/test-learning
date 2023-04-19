import { makeAutoObservable } from 'mobx'

export default class SoundStore {
  _isPlaying: boolean

  constructor() {
    this._isPlaying = false
    makeAutoObservable(this)
  }

  setIsPlaying(bool) {
    this._isPlaying = bool
  }

  get isAuth() {
    return this._isPlaying
  }
}
