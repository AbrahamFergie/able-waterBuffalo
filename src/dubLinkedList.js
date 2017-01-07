class Node{
  constructor(data, next = null,prev = null) {
    this.data = data
    this.next = next
    this.prev = prev || null
  }
  data() { return this.data }
  next() { return this.next }
  previous() { return this.prev }
}

export default class DoublyLinkedList{
  constructor() {
    this.head = null
    this._length = 0
  }
  getHeadNode() { return this.head }

  getTailNode() {
    let currentNode = this.head
    console.log(currentNode)
    // currentNode.next = this.next

    while( currentNode.next ) {
      currentNode = currentNode.next
    }

    return currentNode
  }

  contains( data ) {
    let currentNode = this.head

    while( currentNode.next ) {
      if( currentNode.data === data ){
        return true
      } else {
        currentNode = currentNode.next
      }
    }

    return false
  }

  find( data ) {
    if(this.head){
      let currentNode = this.head

      while( currentNode.next ) {
        // console.log(currentNode)
        if( currentNode.data === data ){
          return currentNode
        } else {
          currentNode = currentNode.next
        }
      }
      return -1
    }else{
      return -1
    }
  }

  insert( data ) {
    let node = new Node( data )
    let currentNode = this.head

    if( !this.head ) {
      this.head = node
      this._length++
      node.prev = null
      return node
    }
    while( currentNode.next ) {
      currentNode = currentNode.next
    }
    currentNode.next = node
    node.prev = currentNode
    // console.log('data',node);
    this._length++

    return node
  }
  insertBefore() {

  }
  insertAfter() {

  }
  remove() {

  }
  removeFirst() {

  }
  isEmpty() { return this._length === 0 }

  size() { return this._length }

  clear() {
    this.head = null
    this._length = 0
  }
}
