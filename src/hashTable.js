class Node {
  constructor(key, value) {
    this.key = key,
    this.value = value,
    this.next = null
  }
}

export default class HashTable {
  constructor() {
    this._length = 0,
    this.dataStore = []
  }

  chain(hash, key, value) {
    let newHash = new Node(key, value)
    let currentNode = this.dataStore[hash]
    while(currentNode.next){
      if (currentNode.key === key) {
        throw new Error('data already exists')
      }else{
        currentNode = currentNode.next
      }
    }
    currentNode.next = newHash
  }

  hashFunction(key) {
    let sum = 0
    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i)
    }
    return sum % 31
  }

  save(hash, key, value) {
    let newHash = new Node(key, value)
    this.dataStore[hash] = newHash
  }

  put(key, value) {
    let hashed = this.hashFunction(key)
    ++this._length
    if(!this.dataStore[hashed]){
      this.save(hashed, key, value)
    }else{
      this.chain(hashed, key, value)
    }
  }
  size() { return this._length }

  get(key) {
    let hashed = this.hashFunction(key)
    let pair, i
    if(this.dataStore[hashed]){
      for(i in this.dataStore[hashed]){
        pair = this.dataStore[hashed][i]
        if(pair.key === key)
          return pair.value
      }
    }
  }

  contains(key) {
    var hash = this.hashFunction(key)
    //go through each of the nodes in the linked list at key location
    let currentNode = this.dataStore[hash]
    if(this.dataStore[hash]){
      if(currentNode.key === key){
        return true
      }else {
        while(currentNode.next){
          if(currentNode.key === key){
            return true
          }else {
            currentNode = currentNode.next
          }
        }
      }
      if(currentNode.key === key){
        return true
      }else { return false }
    }else{ return false }
  }

  pushy(arr, key, value) {
    let ob = {key, value}
    arr.push(ob)
    return arr
  }

  iterate(key) {
    let arr = []
    let hashed = this.hashFunction(key)
    let currentNode = this.dataStore[hashed]
    while (currentNode.next) {
      this.pushy(arr, currentNode.key, currentNode.value)
      currentNode = currentNode.next
    }
    this.pushy(arr, currentNode.key, currentNode.value)
    return arr
    console.log(arr);
  }

  remove(key) {
    let hashed = this.hashFunction(key)
    let chainLinks
    if (this.dataStore[hashed]) {
      let currentNode = this.dataStore[hashed]
      if(currentNode.key === key){
        chainLinks = currentNode.next
        delete this.dataStore[hashed]
        --this._length
        this.dataStore[hashed] = chainLinks
      }else {
        while (currentNode.next){
          if (currentNode.next.key === key) {
            chainLinks = currentNode.next.next
            delete currentNode.next
            --this._length
            currentNode.next = chainLinks
          }else {
            currentNode = currentNode.next
          }
        }
        if(currentNode.key === key){
          chainLinks = currentNode.next
          delete this.dataStore[hashed]
          --this._length
          this.dataStore[hashed] = chainLinks
        }
      }
    }
  }
}
