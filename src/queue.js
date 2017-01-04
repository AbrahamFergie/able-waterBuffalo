'use strict'

export default class Queue {
  constructor() {
    this.head = 0
    this.sequence = []
  }

  enqueue( data ) {
    this.sequence[ this.head ] = data
    this.head++
  }

  dequeue() {
    return this.head > 0 ? this.sequence.splice(0, 1)[0] : null
  }

  front() {
    return this.head > 0 ? this.sequence[0] : null
  }

  back() {
    return this.head > 0 ? this.sequence[ --this.head ] : null
  }

  isEmpty() {
    return this.head === 0 ? true : false
  }

  length() {
    return this.head
  }

}
