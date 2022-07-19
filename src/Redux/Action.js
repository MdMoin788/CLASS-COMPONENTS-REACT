import axios from 'axios'
import { FETCH_RPODUCTS, ADD_TO_CART,REMOVE_CART_ITEM } from './ActionType'
export const FetchProductsApi = () => (dispatch) => {
    try {
        axios
            .get(`https://fakestoreapi.com/products`)
            .then((data) => {
                dispatch({ type: FETCH_RPODUCTS, payload: data.data })
            })
    } catch (error) {
        console.log('error', error)
    }
}
export const AddToCart = (id) => (dispatch) => {
    try {
        dispatch({ type: ADD_TO_CART, payload: id })
    } catch (error) {
        console.log('error', error)
    }
}
export const CartItemRemove = (id) => (dispatch) => {
    try {
        dispatch({ type: REMOVE_CART_ITEM, payload: id })
    } catch (error) {
        console.log('error', error)
    }
}