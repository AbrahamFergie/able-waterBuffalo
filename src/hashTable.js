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
    return this.dataStore[hash] ? true : false
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
    if (this.dataStore[hashed]) {
      let currentNode = this.dataStore[hashed]
      while (currentNode.next){
        if (currentNode.key === key) {
          delete currentNode.key
        }else {
          currentNode = currentNode.next
        }
      }
    }
  }
}
