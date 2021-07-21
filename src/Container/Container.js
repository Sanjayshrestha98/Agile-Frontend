import { Component } from "react";
import Registration from "./Registration";
import Login from "./Login";
import { Route } from "react-router-dom";
import Header from "../Header/Header";
import Product from "./Product";


class Container extends Component{
    render(){
        return(
            <div>
                  <Header></Header>
                <Route path="/register" component = {Registration}/>
                <Route path="/login" component = {Login}/>
                <Route path="/products" component = {Product}/>

                
            </div>
        )
    }
}

export default Container;