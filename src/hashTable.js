class Hash {
  constructor(pair1, pair2) {
    this.pair = {pair1, pair2},
    this.next = null
  }
}

export default class HashTable {
  constructor() {
    this.size = 0
    this.dataStore = {}
  }
 
  put(name, value) {
    let hash = new Hash(name)

    this.dataStore = new Hash(name, value)
    this.next = null
    ++this.size
  }

  // HashTable.get() {
  //
  // }
  // HashTable.contains() {
  //
  // }
  // HashTable.iterate() {
  //
  // }
  // HashTable.remove() {
  //
  // }
  // HashTable.size() {
  //
  // }
}
