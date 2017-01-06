import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linkedList'

chai.use(chaiChange)

describe('LinkedList', () => {
  it('exists', () => {
    expect(LinkedList).to.be.a('function')
  })

  context('getHeadNode()', () => {
    it('returns the first node in the list', () => {
      const list = new LinkedList()

      expect( list.getHeadNode() ).to.eql( null )

      list.insert('element')
      list.insert('other-element')

      expect( list.getHeadNode().data ).to.eql('element')
    })
  })

  context('getTailNode()', () => {
    it('Returns the last node in the list', () => {
      const list = new LinkedList()

      list.insert('element')
      list.insert('other-element')
      list.insert('another-element')
      list.insert('elementals')
      list.insert('other-elementals')

      expect( list.getTailNode().data ).to.eql('other-elementals')
    })
  })

  context('contains()', () => {
    it('Determines whether or not the list contains the provided data', () => {
      const list = new LinkedList()

      list.insert('element')
      list.insert('another-element')
      list.insert('elementals')

      expect( list.contains( 'other-elementals' ) ).to.eql(false)

      list.insert('other-elementals')

      expect( list.contains( 'elementals' ) ).to.eql( true )
    })
  })
  context('find()', () => {
    it('Returns the first node containing the provided data, or -1 if not found', () => {
      const list = new LinkedList()

      list.insert('element')
      list.insert('another-element')
      list.insert('elementals')

      expect( list.find( 'other-elementals' ) ).to.eql( -1 )

      list.insert('other-elementals')

      expect( list.find( 'elementals' ) ).to.eql(
        {
          data:'elementals',
          next: {
            data: 'other-elementals',
            next: null
          }
        }
      )
    })
  })

  context('insert()', () => {
    it('Inserts a node (with the provided data) to the tail of the list', () => {
      const list = new LinkedList()

      expect( list.insert('element') ).to.eql( { data:'element', next: null } )
    })
  })

  context('insertFirst()', () => {
    it('Inserts a node (with the provided data) to the head of the list', () => {
      const list = new LinkedList()

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
      const list = new LinkedList()

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
      const list = new LinkedList()

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
      const list = new LinkedList()

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
      const list = new LinkedList()

      list.insert('element')
      list.insert('other-element')
      list.insert('other-elementals')
      list.insert('apples')
      list.insert('elementals')

      expect(() =>  list.removeFirst() ).to.alter(() =>  list.size(), { from: 5, to: 4 } )
      expect( list.find( 'element' ) ).to.eql( -1 )

    })
  })

  context('isEmpty()', () => {
    it('Determines if the list is empty or not', () => {
      const list = new LinkedList()

      expect( list.isEmpty() ).to.eql( true )

      list.insert('element')
      list.insert('other-element')
      list.insert('other-elementals')
      list.insert('apples')
      list.insert('elementals')

      expect( list.isEmpty() ).to.eql( false )

    })
  })

  context('clear()', () => {
    it.only('Clears the list of all nodes/data', () => {
      const list = new LinkedList()

      list.insert('element')
      list.insert('other-element')
      list.insert('other-elementals')
      list.insert('apples')
      list.insert('elementals')

      expect(() => list.clear() ).to.alter(() => list.size(), { from: 5, to: 0 })
      expect( list.find( 'elementals' ) ).to.eql( -1 )
    })
  })

})
