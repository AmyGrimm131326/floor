import { Component } from 'react';
import React from "react";

import About from "../components/About"
// import FrontPageJumbo from "../components/FrontPageJumbo"
// import Cards from "../components/Cards"
import api from "../api/api"
// import Cart from "../components/Cart"
import Information from "../components/Information"

class Home extends Component {
  
 

    render() {
        return (
           
            <div className="container-fluid">

                <About />
               
                <Information />

             

            </div>
        )
    }
}
export default Home;