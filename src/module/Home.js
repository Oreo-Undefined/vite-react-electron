import { makeObservable, action, observable } from 'mobx'

export default class Home {
  constructor() {
    makeObservable(this, {
      count: observable,
      onChange: action.bound
    });
  }
  count = 1
  onChange() {
    this.count++
  }
}
