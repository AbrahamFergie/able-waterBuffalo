class Node {
  constructor(data) {
    this.data = data,
    this.next = null
  }
}

export default class linkedList {
  constructor(){
    this._length = 0,
    this.head = null,
    this.tail = null
  }

  insert(data) {
    let node = new Node(data)

    if(this.head === null){
      ++this._length
      return this.head = this.tail = node
    }
    let currentNode = this.head

    while(currentNode.next){
      currentNode = currentNode.next
    }
      ++this._length
      currentNode.next = node
    return this.tail = node
  }
  
  size() { return this._length }

  getHeadNode(){ return this.head }

  getTailNode(){ return this.tail }

  contains(data) {
    let currentNode = this.head

    while(currentNode.next) {
      if(currentNode.data === data) return true
      currentNode = currentNode.next
    }
    if(this.getTailNode().data === data)return true
    return false
  }

  find(data) {
    let currentNode = this.head

    while(currentNode.next) {
      if(currentNode.data === data) return currentNode
      currentNode = currentNode.next
    }
    return -1
  }

  insertFirst(data) {
    let node = new Node(data)
    ++this._length
    node.next = this.head
    this.head = node
  }




}
