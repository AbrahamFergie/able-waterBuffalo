import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe('Queue', () => {
  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element (the string "foo") to the back of the queue.', () => {
      const aQueue = new Queue()
      aQueue.enqueue( 'foo' )
      aQueue.enqueue( 'fooBar' )
      aQueue.enqueue( 'fooBoo' )

      expect( aQueue.sequence ).to.eql( [ 'foo','fooBar', 'fooBoo' ] )
    })

  })

  context('dequeue', () => {
    it('returns and removes the front element in the queue or null if the queue is empty.', () => {
      const aQueue = new Queue()
      aQueue.enqueue( 'foo' )
      aQueue.enqueue( 'fooBar' )
      aQueue.enqueue( 'fooBoo' )
      aQueue.dequeue()

      expect( aQueue.sequence ).to.eql( [ 'fooBar', 'fooBoo' ] )

    })
  })

  context('front()', () => {
    it('returns the front element in queue or null if the queue is empty.', () => {
      const aQueue = new Queue()
      aQueue.enqueue( 'foo' )
      aQueue.enqueue( 'fooBar' )
      aQueue.enqueue( 'fooBoo' )

      expect( aQueue.front() ).to.eql( 'foo' )
    })
  })

  context('back()', () => {
    it('returns the back element in the queue or null if the queue is empty.', () => {
      const aQueue = new Queue()
      aQueue.enqueue( 'foo' )
      aQueue.enqueue( 'fooBar' )
      aQueue.enqueue( 'fooBoo' )

      expect( aQueue.back() ).to.eql( 'fooBoo' )
    })
  })

  context('isEmpty()', () => {
    it('returns true if the queue is empty or false if not.', () => {
      const aQueue = new Queue()
      expect( aQueue.isEmpty() ).to.eql( true )

      aQueue.enqueue( 'foo' )
      aQueue.enqueue( 'fooBar' )
      expect( aQueue.isEmpty() ).to.eql( false )
    })
  })

  context('length()', () => {
    it.only('returns the number of elements in the queue', () => {
      const aQueue = new Queue()
      aQueue.enqueue( 'foo' )
      aQueue.enqueue( 'fooBar' )
      aQueue.enqueue( 'fooBoo' )

      expect( aQueue.length() ).to.eql( 3 )
    })
  })
})
