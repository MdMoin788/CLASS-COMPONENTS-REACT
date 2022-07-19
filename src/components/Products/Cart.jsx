import React, { Component } from 'react'
import { connect } from 'react-redux'   // THIS IS TO CONNECT THE REDUX WITH REACT
import { CartItemRemove } from '../../Redux/Action'
export class Cart extends Component {
    constructor(props) {   // IN SHORT CONTRUCTOR IS HANDLING THE USE STATE WORKS AND PROPS AND SUPER (PROPS ) ALLOW TO ACCESS DATA FROM PARENT 
        super(props)
        this.state = {
            cartItem: 0,
        }
    }
    render() {

        const dataFromRedux = this.props.cart // this is coming from line num 31
        return (
            <div>
                <h2 style={{ wordSpacing: '20px', display: "inline-block" }} > <h2>Cart-Item : {this.props.cart.length}</h2> </h2>
                {
                    this.props.cart.length == 0 ? <h1 style={{ textAlign: "center", marginTop: "100px", fontSize: "60px" }}>No Data in Cart Pls Add first</h1 > :
                        this.props.cart.map((ele) => <div style={{ margin: "auto", width: "70%", display: "flex", justifyContent: "space-around", marginTop: "30px", border: "1px dashed black", height: "120px", alignItems: "center" }}>
                            <div><img style={{ width: "70px" }} src={ele.image} alt="" /></div>
                            <div>{ele.title}</div>
                            <div>{ele.rating.rate}</div>
                            <div><button onClick={() => this.props.CartItemRemove(ele.id)}>Remove Btn</button></div>
                        </div>)
                }
            </div>
        )
    }
}
const mapStateToProps = (store) => ({   // THIS JUST  A USE SELECTOR 
    cart: store.ApiData.cart,
})
const mapDispatchToProps = (dispatch) => ({   // THIS IS JUST  A DISPATCHER
    CartItemRemove: (id) => dispatch(CartItemRemove(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
