import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/hashTable'

chai.use(chaiChange)

describe('hashTable', () => {
  it('exists', () => {
    expect(HashTable).to.be.a('function')
  })
  context('put()', () => {
    it.only('adds a key-value pair to the hash table.', () => {
      const ht = new HashTable()
      ht.put('name', 'sal')
      console.log('where are you', ht);
      expect(ht.dataStore.name).to.eql('sal')
    })
  })

})
