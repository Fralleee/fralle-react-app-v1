class AsyncConst {
  constructor(root, custom) {
    this.REQUEST = `${root}_REQUEST`
    this.SUCCESS = `${root}_SUCCESS`
    this.FAILURE = `${root}_FAILURE`
    if (custom) {
      this[custom] = `${root}_${custom}`
    }
  }
}


export default {
  
}
