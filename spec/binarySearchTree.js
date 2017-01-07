import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import BinarySearchTree from '../src/binarySearchTree'

chai.use(chaiChange)

describe('BinarySearchTree', () => {
  it('exists', () => {
    expect(BinarySearchTree).to.be.a('function')
  })
  context('insert()', () => {
    it.only('inserts a node with the specified value into the tree.', () => {
      const bsTree = new BinarySearchTree()
      bsTree.insert(5)
      bsTree.insert(1, )
      bsTree.insert(10)

      expect( bsTree.count ).to.eql( 3 )

    })
  })


})
