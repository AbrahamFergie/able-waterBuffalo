export default class DirectedGraph {
  constructor(){
    this.vertices = 0
    // this.anotherVertex = w
    this.edges = []
    this.edgeCounter = 0

    // for( let i = 0; i < this.anotherVertex; ++i ) {
    //   this.edges[i] = []
    //   this.edges[i].push('')
    // }
  }
  makeGraph(){
    for( let i = 0; i < this.vertices; ++i ) {
      this.edges[i] = []
      this.edges[i].push()
    }
  }
  // removeEdge() {
  //
  // }
  addVertex(v) { ++this.vertices }
  hasVertex(v) {
    let k
    for(let i = 0; i < this.edges.length; i++){
      // console.log('vertices =======', this.edges.length)
      if(i === v){
        return true
      }
    }
    return false
  }

  addEdge(a, b) {
    // console.log(this.edges[a]);
    // console.log(this.edges);
    this.edges[a].push(b)
    this.edges[b].push(a)
    this.edgeCounter++
  }

  // findEdge() {
  //
  // }

  graphSize() {
    for ( var i = 0; i < this.vertices; ++i) {
      console.log( i + '->' );
      for (  var j = 0; j < this.vertices; ++j ) {
        if ( this.edges[i][j] != undefined )
          console.log( this.edges[i][j] + ' ' )
      }
      // print();
    }

    // for ( var i = 0; i < this.anotherVertex; ++i) {
    //   console.log( i + '->' );
    //   for (  var j = 0; j < this.anotherVertex; ++j ) {
    //     if ( this.edges[i][j] != undefined )
    //       console.log( this.edges[i][j] + ' ' )
    //   }
    //   // print();
    // }
  }



}
