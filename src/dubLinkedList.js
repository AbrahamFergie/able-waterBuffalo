import { Node, LinkedList } from './linkedList'

class DoubNode extends Node {
  constructor(prev) {
    this.prev = prev || null
  }
  previous() { return this.prev }
}


export default class DoublyLinkedList extends LinkedList {
  constructor() {
    this.bob = null
  }

  insert() {

  }
  insertBefore() {

  }
  insertAfter() {

  }
  remove() {

  }
  removeFirst() {

  }
}
