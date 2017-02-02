class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
  goLeft(){ return this.left }
  goRight(){ return this.right }
}

export default class BinarySearchTree {
  constructor(){
    this.root = null
    this.count = 0
  }
  getMin( node ) {
    let currentNode = this.root
    while( currentNode.goLeft() ){
      currentNode = currentNode.left
    }
    return currentNode
  }
  insert( data ) {
    const helperInsert = ( data, subtree ) => {
     if ( data < subtree.data ) {
       if ( !subtree.left ) {
         subtree.left = new TreeNode ( data )
       } else {
         helperInsert( data, subtree.left )
       }
     } else {
       if ( !subtree.right ) {
         subtree.right = new TreeNode ( data )
       } else {
         helperInsert( data, subtree.right )
       }
     }
    }
    if ( !this.root ) { this.root = new TreeNode ( data ) }
    else { helperInsert( data, this.root ) }
    this.count++
  }

}
