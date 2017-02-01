import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import linkedList from '../src/linkedList'

chai.use(chaiChange)

describe('linkedList', () => {
  it('exists', () => {
    expect(linkedList).to.be.a('function')
  })

  context('insert()', () => {
    it('creates a new node and places in the linked list as the new tail node', () => {
      const myLinkedList = new linkedList()
      myLinkedList.insert( 'water' )
      myLinkedList.insert( 'balloons' )

      console.log(myLinkedList._length);
      expect(myLinkedList.head).to.eql({ data: 'water', next: { data: 'balloons', next: null}})
      expect(myLinkedList._length).to.eql(2)
    })
  })
  context('getHeadNode()' , () => {
    it('returns the first node on the linked list', () => {
      const myLinkedList = new linkedList()
      expect(myLinkedList.getHeadNode()).to.eql(null)
      myLinkedList.insert( 'water' )
      myLinkedList.insert( 'balloons' )
      myLinkedList.insert( 'lion' )

      expect(myLinkedList.getHeadNode().data).to.eql( 'water' )
    })
  })
  context('getTailNode()', () => {
    it('returns the last node on the linked list', () => {
      const myLinkedList = new linkedList()
      expect(myLinkedList.getTailNode()).to.eql(null)
      myLinkedList.insert( 'tiger' )
      myLinkedList.insert( 'muffin' )
      myLinkedList.insert( 'steel' )
      myLinkedList.insert( 'atom' )
      myLinkedList.insert( 'giraffe' )
      expect(myLinkedList.getTailNode()).to.eql({data: 'giraffe', next: null})
    })
  })
  context('contains()', () => {
    it('determines whether or not the list contains the provided data', () => {
      const myLinkedList = new linkedList()
      myLinkedList.insert( 'muffin' )
      myLinkedList.insert( 'steel' )
      myLinkedList.insert( 'atom' )
      myLinkedList.insert('lions')
      expect(myLinkedList.contains( 'atom' )).to.be.true
    })
  })
  context('find()', () => {
    it('returns the first node containing the provided data, or -1 if not found', () => {
      const myLinkedList = new linkedList()
      myLinkedList.insert( 'muffin' )
      myLinkedList.insert( 'steel' )
      myLinkedList.insert( 'lions' )
      myLinkedList.insert( 'atom' )
      myLinkedList.insert('atom' )

      expect(myLinkedList.find( 'atom' )).to.eql({data:'atom', next: {data: 'atom', next: null}})
      expect(myLinkedList.find( 'sal' )).to.eql(-1)
    })
  })
  context('insertFirst()', () => {
    it('Inserts a node (with the provided data) to the head of the list', () => {
      const myLinkedList = new linkedList()
      myLinkedList.insert( 'muffin' )
      myLinkedList.insert( 'steel' )
      expect(myLinkedList._length).to.eql(2)

      myLinkedList.insertFirst( 'bear' )

      expect(myLinkedList.head.data).to.eql('bear')
      expect(myLinkedList._length).to.eql(3)
    })
  })
})
