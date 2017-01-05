import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Set from '../src/set'

chai.use(chaiChange)

describe('Set', () => {
  it('exists', () => {
    expect(Set).to.be.a('function')
  })

  context('add()', () => {
    it('adds an element to the set.', () => {
      const aSet = new Set([])

      aSet.add('foo')
      aSet.add('fooDoo')
      aSet.add('fooBoo')
      aSet.add('fooBar')

      expect( aSet.sequence ).to.eql( [ 'foo', 'fooDoo', 'fooBoo', 'fooBar' ] )

    })
  })

  context('isEmpty()', () => {
    it('returns true if the queue is empty or false if not.', () => {
      const aSet = new Set([])
      expect( aSet.isEmpty() ).to.eql( true )

      aSet.add('foo')
      aSet.add('fooDoo')
      aSet.add('fooBoo')
      aSet.add('fooBar')
      expect( aSet.isEmpty() ).to.eql( false )

    })
  })

  context('contains()', () => {
    it('returns true the set contains the element or false if not.', () => {
      const aSet = new Set([])

      aSet.add('foo')
      aSet.add('fooDoo')
      aSet.add('fooBoo')
      aSet.add('fooBar')

      expect( aSet.contains( 'fooBoo' ) ).to.eql( true )
      expect( aSet.contains( 'bob' ) ).to.eql( false )
    })
  })

  context('remove()', () => {
    it('removes an element (if it exists) from the set.', () => {
      const aSet = new Set([])

      aSet.add('foo')
      aSet.add('fooDoo')
      aSet.add('fooBoo')
      aSet.add('fooBar')

      expect( aSet.remove( 'fooBoo' ) ).to.eql( [ 'foo', 'fooDoo', 'fooBar' ] )
    })
  })

  context('iterator( function() )', () => {
    it('takes a callback function and passes it each element in sequence.', () => {
      const aSet = new Set([])

      aSet.add(1123)
      aSet.add(4536)
      aSet.add(87968)
      aSet.add(5243654)

      expect( aSet.iterator( elem => elem + 1 )).to.eql( [ 1124, 4537, 87969, 5243655 ] )
    })
  })

  context('size()', () => {
    it('returns the number of elements in the set.', () => {
      const aSet = new Set([])



      aSet.add(1123)
      aSet.add(4536)
      aSet.add(87968)
      aSet.add(5243654)
      aSet.add(1123)
      aSet.add(4536)
      aSet.add(87968)
      aSet.add(5243654)

      expect( aSet.size() ).to.eql( 8 )
    })
  })

  context('union()', () => {
    it('unions the set with another set and returns the resulting set.', () => {
      const aSet = new Set([])
      const anotherSet = new Set([])

      aSet.add(1123)
      aSet.add(4536)
      aSet.add(87968)
      aSet.add(5243654)
      aSet.add(4423)
      anotherSet.add(4423)
      anotherSet.add(7636)
      anotherSet.add(90968)
      anotherSet.add(53654)


      expect( aSet.union( anotherSet ) ).to.eql([ 1123, 4536, 87968, 5243654, 4423, 7636, 90968, 53654 ])
    })
  })

  context('intersects()', () => {
    it('intersects the set with another set and returns the resulting set.', () => {
      const aSet = new Set([])
      const anotherSet = new Set([])

      aSet.add(1123)
      aSet.add(4536)
      aSet.add(87968)
      aSet.add(4423)
      anotherSet.add(4423)
      anotherSet.add(7636)
      anotherSet.add(90968)
      anotherSet.add(53654)


      expect( aSet.intersects( anotherSet ) ).to.eql([ 4423 ])
    })
  })

  context('difference()', () => {
    it('returns a set that contains the elements found in the set but not in otherSet.', () => {
      const aSet = new Set([])
      const anotherSet = new Set([])

      aSet.add(1123)
      aSet.add(4536)
      aSet.add(87968)
      aSet.add(4423)
      anotherSet.add(4423)
      anotherSet.add(7636)
      anotherSet.add(90968)
      anotherSet.add(53654)


      expect( aSet.difference( anotherSet ) ).to.eql([ 1123, 4536, 87968 ])
    })
  })

  context('subSet()', () => {
    it('returns true if the set is a subset of otherSet or false if not.', () => {
      const aSet = new Set([])
      const anotherSet = new Set([])

      aSet.add(1423)
      aSet.add(8636)
      aSet.add(25968)
      anotherSet.add(4423)
      anotherSet.add(7636)
      anotherSet.add(90968)
      anotherSet.add(53654)
      anotherSet.add(93654)
      anotherSet.add(453654)

      expect( aSet.subSet( anotherSet ) ).to.eql( false )

      const theSet = new Set([])

      theSet.add(4423)
      theSet.add(7636)
      theSet.add(90968)

      expect( theSet.subSet( anotherSet ) ).to.eql( true )

    })
  })

  context('clone()', () => {
    it.only('returns a cloned set.', () => {
      const aSet = new Set([])

      aSet.add('foo')
      aSet.add('fooDoo')
      aSet.add('fooBoo')
      aSet.add('fooBar')

      expect( aSet.clone() ).to.eql( aSet.sequence )
    })
  })
})
