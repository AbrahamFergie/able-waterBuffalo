import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import pQueue from '../src/pQueue'

chai.use(chaiChange)

describe('pQueue', () => {
  it('exists', () => {
    expect(pQueue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element with priority (number) to the back of the queue.', () => {
      const thePQueue = new pQueue()

      thePQueue.enqueue({ priority: 1, data: 'foo' })
      thePQueue.enqueue({ priority: 2, data: 'fooBoo' })
      thePQueue.enqueue({ priority: 3, data: 'fooBar' })
      thePQueue.enqueue({ priority: 4, data: 'fooDoo' })

      expect( thePQueue.sequence ).to.eql( [ { priority: 1, data: 'foo' }, { priority: 2, data: 'fooBoo' }, { priority: 3, data: 'fooBar' }, { priority: 4, data: 'fooDoo' }  ] )

    })
  })

  context('front()', () => {
    it('returns the front element (highest priority) in queue or null if the queue is empty.', () => {
      const thePQueue = new pQueue()

      thePQueue.enqueue({ priority: 12, data: 'foo' })
      thePQueue.enqueue({ priority: 20, data: 'fooBoo' })
      thePQueue.enqueue({ priority: 3, data: 'fooBar' })
      thePQueue.enqueue({ priority: 400, data: 'fooDoo' })

      expect( thePQueue.front() ).to.eql( { priority: 3, data: 'fooBar' } )
    })
  })

  context('back()', () => {
    it('returns the back element (lowest priority) in the queue or null if the queue is empty.', () => {
      const thePQueue = new pQueue()

      thePQueue.enqueue({ priority: 12, data: 'foo' })
      thePQueue.enqueue({ priority: 20, data: 'fooBoo' })
      thePQueue.enqueue({ priority: 3, data: 'fooBar' })
      thePQueue.enqueue({ priority: 400, data: 'fooDoo' })

      expect( thePQueue.back() ).to.eql( { priority: 400, data: 'fooDoo' } )
    })
  })

  context('dequeue()', () => {
    it('returns and removes the front element in the queue or null if the queue is empty.', () => {
      const thePQueue = new pQueue()

      thePQueue.enqueue({ priority: 12, data: 'foo' })
      thePQueue.enqueue({ priority: 20, data: 'fooBoo' })
      thePQueue.enqueue({ priority: 3, data: 'fooBar' })
      thePQueue.enqueue({ priority: 400, data: 'fooDoo' })

      expect( thePQueue.dequeue() ).to.eql( { priority: 12, data: 'foo' } )
    })
  })

  context('isEmpty()', () => {
    it('returns true if the queue is empty or false if not.', () => {
      const thePQueue = new pQueue()
      expect( thePQueue.isEmpty() ).to.eql( true )

      thePQueue.enqueue({ priority: 12, data: 'foo' })
      thePQueue.enqueue({ priority: 20, data: 'fooBoo' })
      thePQueue.enqueue({ priority: 3, data: 'fooBar' })
      thePQueue.enqueue({ priority: 400, data: 'fooDoo' })
      expect( thePQueue.isEmpty() ).to.eql( false )

    })
  })

  context('length()', () => {
    it('eturns the number of elements in the queue.', () => {
      const thePQueue = new pQueue()

      thePQueue.enqueue({ priority: 12, data: 'foo' })
      thePQueue.enqueue({ priority: 20, data: 'fooBoo' })
      thePQueue.enqueue({ priority: 3, data: 'fooBar' })
      thePQueue.enqueue({ priority: 400, data: 'fooDoo' })

      expect( thePQueue.length() ).to.eql( 4 )
    })
  })

})
