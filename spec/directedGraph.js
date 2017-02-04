import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import DirectedGraph from '../src/directedGraph'

chai.use(chaiChange)

describe('DirectedGraph', () => {
  it('exists', () => {
    expect(DirectedGraph).to.be.a('function')
  })

  context('addVertex()', () => {
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
    it("adds a direction from 'v1' to 'v2' with a weight(number)", () => {
      const dg = new DirectedGraph()
      for(let i = 0; i < 6; i++ ){
        dg.addVertex(i)
      }
      dg.makeGraph()
      // dg.makeGraph()
      dg.addDirection(0, 1, 4)
      dg.addDirection(0, 2, 5)
      dg.addDirection(0, 3, 6)
      dg.addDirection(0, 4, 7)
      expect(() => dg.addDirection(0, 5, 8)).to.alter(() => dg.edgeCounter, {from: 4, to: 5})
      dg.graphSize()
      console.log(dg.edges);
      // expect(dg.addDirection(0, 1, 6)).to.equal()
    })
  })
  context('hasDirection()', () => {
    it.only('returns true if there is a direction from "v1" to "v2"', () => {
      const dg = new DirectedGraph()
      for(let i = 0; i < 6; i++) {
        dg.addVertex(i)
      }
      dg.makeGraph()
      dg.addDirection(0, 1, 4)
      dg.addDirection(0, 2, 5)
      dg.addDirection(0, 3, 6)
      dg.addDirection(0, 4, 7)
      console.log(dg.edges);
      expect(dg.hasDirection(0, 1)).to.be.true
    })
  })

  context('getDirectionWeight', () =>  {
    it.only('returns direction weight between v1 & v2 or null if no direction exists.', () => {
      const dg = new DirectedGraph()
      for(let i = 0; i < 15; i++) {
        dg.addVertex(i)
      }
      dg.makeGraph()
      dg.addDirection(0, 1, 1)
      dg.addDirection(0, 3, 3)
      dg.addDirection(0, 4, 2)
      dg.addDirection(1, 5, 2)
      dg.addDirection(1, 6, 3)
      dg.addDirection(1, 7, 1)
      dg.addDirection(1, 2, 2)
      dg.addDirection(2, 8, 3)
      dg.addDirection(3, 9, 2)
      dg.addDirection(3, 4, 3)
      dg.addDirection(4, 10, 2)
      dg.addDirection(4, 11, 3)
      dg.addDirection(5, 10, 1)
      dg.addDirection(5, 6, 1)
      dg.addDirection(6, 11, 2)
      dg.addDirection(7, 12, 2)
      dg.addDirection(7, 13, 1)
      dg.addDirection(8, 14, 2)
      dg.addDirection(9, 10, 3)
      expect(dg.getDirectionWeight(12, 13)).to.equal(undefined)
      dg.addDirection(12, 13, 3)
      dg.addDirection(2, 8, 3)

      expect(dg.getDirectionWeight(0, 4)).to.equal(2)
      expect(dg.findShortestPath(0, 11)).to.eql(5)

      console.log(dg.edges)
    })
  })

})
