export default class Set {
  constructor( sequence ) {
    this.index = 0
    this.sequence = sequence
    this.contains()
  }

  add( data ) {
    return this.sequence[ this.index++ ] = data
  }

  isEmpty() {
    return this.index === 0 ? true : false
  }

  contains( data ) {
    for( let i = 0; i < this.index; i++ ){
      if(this.sequence[i] === data){
        return true
      }else if( this.sequence[i + 1] === undefined ){
        return false
      }
    }
  }

  remove( data ) {
    for( let i = 0; i < this.index; i++ ) {
      if( this.sequence[i] === data ){
        this.sequence.splice( i, 1 )
        return this.sequence
      }
    }
  }

  iterator( callback ) {
    const newArr = []
    for ( let i = 0; i < this.index; i++ ) {
      newArr[i] = callback( this.sequence[i] )
    }
    this.sequence = newArr
    return this.sequence
  }

  size() {
    return this.index
  }

  union( data ) {
    for( let i = 0; i < data.size(); i++  ){
      this.sequence[ this.index++ ] = data.sequence[i]
    }
    for( let k = 0; k < this.index; k++ ){
      for( let j = k + 1; j < this.index; j++ ){
        if( this.sequence[k] === this.sequence[j] ){
          this.sequence.splice( k--, 1 )
        }
      }
    }

    return this.sequence
  }

  intersects( data ) {
    let result = []
    for( let i = 0; i < data.size(); i++ ){
      for( let j = 0; j < this.index; j++ ){
        if( this.sequence[j] === data.sequence[i] ){
          let counter = 0
          result[counter++] = this.sequence[j]
          this.index = ++counter
        }
      }
    }
    this.sequence = result
    return this.sequence
  }

  difference( data ) {
    for( let k = 0; k < this.index; k++ ){
      for( let j = 0; j < this.index; j++ ){
        if( this.sequence[k] === data.sequence[j] ){
          this.sequence.splice( k--, 1 )
        }
      }
    }
    return this.sequence
  }

  subSet() {
    
  }


}
