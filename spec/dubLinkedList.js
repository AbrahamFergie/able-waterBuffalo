import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linkedList'

chai.use(chaiChange)

describe('LinkedList', () => {
  it('exists', () => {
    expect(LinkedList).to.be.a('function')
  })
