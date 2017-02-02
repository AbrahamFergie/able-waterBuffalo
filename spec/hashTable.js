import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/hashTable'

chai.use(chaiChange)

describe.only('hashTable', () => {
  it('exists', () => {
    expect(HashTable).to.be.a('function')
  })
  context('put()', () => {
    it('adds a key-value pair to the hash table.', () => {
      const ht = new HashTable()
      ht.put('name', 'frankenstein')
      expect(ht.size()).to.equal(1)
      ht.put('19.0', 'stein')
      expect(ht.size()).to.equal(2)
      ht.get('19.0')
      expect(ht.get('19.0')).to.eql('stein')
    })
  })
  context('contains()', () => {
    it('returns true if the hash table contains the key.', () => {
      const ht = new HashTable()
      expect(ht.contains('name')).to.be.false
      ht.put('name', 'frankenstein')
      ht.put('19.0', 'stein')
      expect(ht.contains('name')).to.be.true
    })
  })
  context('remove()', () => {
    it('removes a key-value pair by key.', () => {
      const ht = new HashTable()
      ht.remove('')
    })
  })
  context('iterate()', () => {
    it('takes a callback function and passes it each key and value in sequence.', () => {
      const ht = new HashTable()
      ht.put('name', 'frankenstein')
      ht.put('19.0', 'stein')
      ht.put('wsrd', 'the weekend')
      let arr = ht.iterate('19.0')
      expect(arr).to.eql([{ key: 'name', value: 'frankenstein' },
      { key: '19.0', value: 'stein' },{ key: 'wsrd', value: 'the weekend' }])
    })
  })
})
