class Node {
  constructor( data, next = null ) {
    this.data = data
    this.next = next
  }
  data() { return this.data }

  next() { return this.next }
}

export default class LinkedList {
  constructor() {
    this.head = null
    this._length = 0
  }

  insert( data ) {
    let node = new Node( data )
    let currentNode = this.head

    if( !this.head ) {
      this.head = node
      this._length++
      return node
    }
    while( currentNode.next ) {
      currentNode = currentNode.next
    }
    currentNode.next = node
    // console.log('data',node);
    this._length++
    return node

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
  }

  insertFirst( data ) {
    let node = new Node( data )
    let currentNode = this.head

    node.next = currentNode
    this.head = node

    return node
  }

  insertBefore( data, newData ) {
    let node = new Node( newData )
    let currentNode = this.head

    while( currentNode.next ) {
      // console.log(currentNode)
      if( currentNode.data === data ){
        node.next = currentNode
        return node
      }
      currentNode = currentNode.next
    }
  }

  size() { return this._length }
}
