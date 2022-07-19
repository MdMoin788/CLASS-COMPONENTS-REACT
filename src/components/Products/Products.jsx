import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import { connect } from 'react-redux'
import { FetchProductsApi } from '../../Redux/Action'
import { AddToCart } from '../../Redux/Action'
class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
        this.props.FetchProductsApi()
    }
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <br />
                <div style={{ width: "100%", display: "flex", justifyContent: "space-around", marginTop: "30px", gap: "20px", height: "300px", alignItems: "center", flexWrap: "wrap" }}>
                    {
                        this.props.Api_Products.map((ele) => <div key={ele._id} style={{ width: "20%", border: "1px solid whitesmoke", display: "flex", flexDirection: "column", justifyContent: "space-around", marginTop: "30px", background: "whitesmoke", height: "100%", alignItems: "center", color: "black" }}>
                            <div style={{ width: "60%" }}><img style={{ width: "100%", }} src={ele.image} alt="" /></div>
                            <button onClick={() => this.props.AddToCart(ele.id)}>Add To Cart</button>
                            <br />
                            <div>{ele.title}</div>
                            <br />
                            <div>{ele.rating.rate}</div>
                            <br />
                        </div>)
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = (store) => ({
    demo: store.ApiData.demo,
    Api_Products: store.ApiData.Api_Products,
})
const mapDispatchToProps = (dispatch) => ({
    FetchProductsApi: () => dispatch(FetchProductsApi()),
    AddToCart: (id) => dispatch(AddToCart(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Products)
