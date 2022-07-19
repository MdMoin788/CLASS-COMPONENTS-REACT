import { ADD_TO_CART, FETCH_RPODUCTS , REMOVE_CART_ITEM} from "./ActionType"

const initState = {
    Api_Products: [],
    demo:"demo",
    cart : []
}


export const Api_Products_Reducer = (store = initState, { type, payload }) => {
    switch (type) {
        case FETCH_RPODUCTS:
            return { ...store, Api_Products: payload }
        case ADD_TO_CART:
          const cartfilter = store.Api_Products.filter((ele)=>ele.id === payload)
          const cartDublicate = store.cart.filter((ele)=>ele.id === payload)

          if(cartfilter.length != 0 && cartDublicate.length == 0){
            return { ...store, cart: [...store.cart, cartfilter[0]] }
          }
          else{
        console.log(store.cart)
            alert("ALREADY PRESENT IN THE CART")
          }
          case REMOVE_CART_ITEM:
            // console.log('updatedCart',payload);

            const updatedCart = store.cart.filter((ele)=>ele.id != payload)
            // console.log('updatedCart', updatedCart);
           if(updatedCart.length != 0){
            return { ...store, cart: updatedCart }
           }else{
            return { ...store, cart : []}
           }
        default:
            return store
    }
}