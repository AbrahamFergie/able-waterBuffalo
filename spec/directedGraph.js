import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import DirectedGraph from '../src/directedGraph'

chai.use(chaiChange)

describe('DirectedGraph', () => {
  it('exists', () => {
    expect(DirectedGraph).to.be.a('function')
  })

  context('addEdge()', () => {
    it('adds a vertex to the graph.', () => {
      const dg = new DirectedGraph()
      for(let i = 0; i < 6; i++ ){
        dg.addVertex(i)
      }
      dg.makeGraph()
      console.log()
      dg.graphSize()
      expect(dg.hasVertex(5)).to.be.true
    })
  })
  context('addDirection()', () => {
    it.only("adds a direction from 'v1' to 'v2' with a weight(number)", () => {
      const dg = new DirectedGraph()
      for(let i = 0; i < 6; i++ ){
        dg.addVertex(i)
      }
      dg.makeGraph()
      dg.addEdge(0,1)
      dg.addEdge(0,2)
      dg.addEdge(1,3)
      dg.addEdge(2,4)
      dg.addEdge(3,4)
      dg.addEdge(1,4)
      expect(dg.addDirection(0, 4, 2)).to.eql()
      // expect(dg.addDirection(0, 1, 6)).to.equal()
    })
  })
})
