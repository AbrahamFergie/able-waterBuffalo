import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import DoublyLinkedList from '../src/dubLinkedList'

chai.use(chaiChange)

describe('DoublyLinkedList', () => {
  it('exists', () => {
    expect(DoublyLinkedList).to.be.a('function')
  })

  context('insert()', () => {
    it('Inserts a node (with the provided data) to the tail of the list', () => {
      const list = new DoublyLinkedList()

      list.insert('element')
      list.insert('other-element')
      list.insert('another-element')

      expect( list.find('another-element') ).to.eql( list.getTailNode() )
    })
  })
  context('insertFirst()', () => {
    it('Inserts a node (with the provided data) to the head of the list', () => {
      const list = new DoublyLinkedList()

      list.insert('element')
      list.insert('other-element')
      list.insert('another-element')
      list.insert('elementals')
      list.insert('other-elementals')
      list.insertFirst( 'ele' )

      expect( list.getHeadNode().data ).to.eql( 'ele' )
    })
  })
  context('insertBefore()', () => {
    it('Inserts a node (with data "apples") before the first node containing "bananas"', () => {
      const list = new DoublyLinkedList()

      list.insert('element')
      list.insert('other-element')
      list.insert('other-elementals')
      list.insert('elementals')
      list.insert('bananas')

      // expect( list.size() ).to.eql( 5 )
      expect( list.insertBefore('bananas', 'apples' ) ).to.eql(
        { data:'apples', next: { data:'bananas', next: null } }
      )
      // expect( list.size() ).to.eql( 6 )
    })
  })
  context('insertAfter()', () => {
    it('Inserts a node (with data "bananas") after the first node containing "apples"', () => {
      const list = new DoublyLinkedList()

      list.insert('element')
      list.insert('other-element')
      list.insert('other-elementals')
      list.insert('apples')
      list.insert('elementals')

      // expect( list.size() ).to.eql( 5 )
      expect( list.insertAfter('apples', 'bananas' ) ).to.eql(
        { data:'bananas', next: { data:'elementals', next: null } }
      )
      // expect( list.size() ).to.eql( 6 )
    })
  })
  context('remove()', () => {
    it('Removes the tail node from the list', () => {
      const list = new DoublyLinkedList()

      list.insert('element')
      list.insert('other-element')
      list.insert('other-elementals')
      list.insert('apples')
      list.insert('elementals')

      expect(() => list.remove() ).to.alter(() => list.size(), { from: 5, to: 4 } )
      expect( list.find( 'elementals' ) ).to.eql( -1 )

    })
  })
  context('removeFirst()', () => {
    it('Removes the head node from the list', () => {
      const list = new DoublyLinkedList()

      list.insert('element')
      list.insert('other-element')
      list.insert('other-elementals')
      list.insert('apples')
      list.insert('elementals')

      expect(() =>  list.removeFirst() ).to.alter(() =>  list.size(), { from: 5, to: 4 } )
      expect( list.find( 'element' ) ).to.eql( -1 )

    })
  })
})
