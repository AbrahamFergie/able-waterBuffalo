import linkedList from '../src/linkedList'

const myList = new linkedList()
const linkedListSetup = () => {
  return Promise.all([
    myList.insert( 'tiger' ),
    myList.insert( 'muffin' ),
    myList.insert( 'steel' ),
    myList.insert( 'atom' ),
    myList.insert( 'giraffe' ),
  ])
}

export { linkedListSetup }
