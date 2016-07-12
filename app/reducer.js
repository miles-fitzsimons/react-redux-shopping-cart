import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
  products: [
    {id: 1, name:'spaghetti'},
    {id: 2, name:'gold'},
    {id: 3, name:'rake'},
    {id: 4, name:'car'},
    {id: 5, name:'falcon'},
    {id: 6, name: 'Miles'},
    {id: 7, name: 'Troy'}
  ],
  cart: [
    {id: 1, name:'spaghetti', quantity: 3},
    {id: 2, name:'gold', quantity: 4},
    {id: 3, name:'rake', quantity: 2}
  ]
})

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT_TO_CART':
    console.log(action)
    let storedInd = 0
    const existingProduct = state.get('cart').toJS().find((elem,ind) => {
      storedInd = ind
      return elem.id == action.id
    }) 
    if (existingProduct) {
      console.log('cart in state', state.toJS().cart)

      // existingProduct.quantity++

      // return state.update(
      //   list.findIndex(function(item) { 
      //     return item.get('id') == action.id
      //   }), function(item) {
      //     return item.set('quantity', parseInt(item.get('quantity')) + 1)
      //   }
      // )

    }
    else {
      const cartObj = {id: action.id, name: state.get('products').toJS().find(function(elem) {
        return elem.id == action.id
      }).name, quantity: 1}
      return state.set('cart', state.get('cart').push(fromJS(cartObj)))
    }



      // return state.set('cart', state.get('cart').push(action.id))
      return state
    default:
      return state
  }
}
