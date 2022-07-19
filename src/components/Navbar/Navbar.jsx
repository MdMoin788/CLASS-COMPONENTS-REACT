import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuData: ["Logo", "Products", "About Us", "Contact Us", "Cart"],
      menuRoutes: ["/", "/products", "/about", "/contact", "/cart"]
    }
  }
  render() {
    console.log(this.props)
    return (
      <div style={{ width: "100%", display: "flex", justifyContent: "space-around", marginTop: "30px", background: "blue", height: "50px", alignItems: "center", color: "white" }}>
        {
          this.state.menuData.map((ele, index) => <Link to={`${this.state.menuRoutes[index]}`} style={{ color: "white", textDecoration: "none" }}><div key={index}>{ele}</div></Link>)
        }
      </div>
    )
  }
}
export default Navbar
