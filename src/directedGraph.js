export default class DirectedGraph {
  constructor(){
    this.vertices = 0
    this.edges = []
    this.edgeCounter = 0
  }
  makeGraph(){
    for( let i = 0; i < this.vertices; ++i ) {
      this.edges[i] = []
      this.edges[i].push(i)
    }
  }

  addVertex(v) { ++this.vertices }
  hasVertex(v) {
    let k
    for(let i = 0; i < this.edges.length; i++){
      if(i === v){
        return true
      }
    }
    return false
  }

  addDirection(v1, v2, w) {
    this.edges[v1].push({vertex1: v1, vertex2: v2, weight: w})
    this.edgeCounter++
  }
  hasDirection(v1, v2) {
    if(this.edges[v1] && this.edges[v2]){
      for( let i = 0; i < this.edges[v1].length; i++) {
        if(this.edges[v1][i].vertex === v2){
          return true
        }
      }
    }
    return false
  }

  findShortestPath(startV, endV) {
    // check if Vs exists
    let totalWeight = 0
    if(this.hasVertex(startV) && this.hasVertex(endV)){
      for(let i = 0; i < this.edges[startV].length; i++){
        let curDir = this.edges[startV][i].vertex2
        if(this.edges[curDir].vertex2 !== endV){
          totalWeight += this.edges[curDir][i].weight
          for(let j = 0; j < this.edges[curDir].length; j++){
            let curDir2 = this.edges[curDir][j].vertex2
            if(this.edges[curDir2].vertex2 !== endV){
              totalWeight += this.edges[curDir2][j].weight
              for(let k = 0; k < this.edges[curDir2].length; k++){
                let curDir3 = this.edges[curDir2][k].vertex2
                if(this.edges[curDir3].vertex2 !== endV){
                  totalWeight += this.edges[curDir3].weight
                  console.log('here',totalWeight)
                  // throw new Error('no path found')
                  for(let l = 0; l < this.edges[curDir3].length; l++){
                    let curDir4 = this.edges[curDir3][l].vertex2
                    if(curDir4 === endV){
                      return totalWeight
                    }
                  }
                }
              }
            }
            return totalWeight = this.edges[curDir].weight + this.edges[curDir2].weight
          }
        }
        return this.edges[startV].weight
      }
    }
  }
  getDirectionWeight(v1, v2) {
    if(this.edges[v1] && this.edges[v2]){
      for( let i = 0; i < this.edges[v1].length; i++) {
        if(this.edges[v1][i].vertex1 === v1 && this.edges[v1][i].vertex2 === v2)
        return this.edges[v1][i].weight
      }
    }

  }
  graphSize() {
    for ( var i = 0; i < this.vertices; ++i) {
      console.log( i + '->' );
      for (  var j = 0; j < this.vertices; ++j ) {
        if ( this.edges[i][j] != undefined )
          console.log( this.edges[i][j] + ' ' )
      }
    }
  }
}
