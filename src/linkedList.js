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
      if( currentNode.data === data ){
        node.next = currentNode
        return node
      }
      currentNode = currentNode.next
    }
    if( currentNode.data === data ){
      node.next = currentNode
      return node
    }
  }

  insertAfter( data, newData ) {
    let node = new Node( newData )
    let currentNode = this.head

    while( currentNode.next ) {
      if( currentNode.data === data ){
        node.next = currentNode.next
        currentNode.next = node
        return node
      }
      currentNode = currentNode.next
    }
  }

  remove() {
    let nodeToRemove = this.getTailNode()
    let currentNode = this.head

    while( currentNode.next ){
      if( currentNode.next.data === nodeToRemove.data ){
        currentNode.next = null
        this._length--
        break
      }
      currentNode = currentNode.next
    }
  }

  removeFirst() {
    let currentNode = this.head

    this.head = currentNode.next
    this._length--
  }

  isEmpty() { return this._length === 0 }

  size() { return this._length }

  clear() {
    this.head = null
    this._length = 0
  }
}
