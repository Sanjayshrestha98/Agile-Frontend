import { Component } from "react";
import Registration from "./Registration";
import Login from "./Login";
import { Route } from "react-router-dom";
import Header from "../Header/Header";


class Container extends Component{
    render(){
        return(
            <div>
                  <Header></Header>
                <Route path="/register" component = {Registration}/>
                <Route path="/login" component = {Login}/>
                
            </div>
        )
    }
}

export default Container;