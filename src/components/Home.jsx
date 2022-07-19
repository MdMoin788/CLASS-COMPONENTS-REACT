import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
class Home extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <br />
                <h1>Home</h1>
                <img style={{ width: "98%", height: "550px" }} src="https://massivepixel.io/app/uploads/2022/02/react-lifecycle-methods.png" alt="" />
            </div>
        )
    }
}
export default Home
