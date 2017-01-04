'use strict'

export default class Stack {
  constructor() {
    this.top = 0
    this.element = []
  }

  push( data ) {
    this.element[ this.top++ ] = data
  }

  pop() {
    return this.top > 0 ? this.element.splice(-1, 1)[0] : null
  }

  length() {return this.top}

  isEmpty() {
    return this.top === 0 ? true : false
  }

  peek() {
    return this.top > 0 ? this.element[this.top-1] : null
  }
}
