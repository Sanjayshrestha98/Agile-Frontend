import { Component } from "react";
import Registration from "./Registration";
import Login from "./Login";
import { Route } from "react-router-dom";
import Header from "../Header/Header";
import Product from "./Product";
import CheckoutPage from "./Cart/CheckoutPage";
import Cartpage from "./Cart/Cartpage";
import SingleProduct from "./SingleProduct";
import RentCart from "./Cart/RentCart";


class Container extends Component{
    render(){
        return(
            <div>
                  <Header></Header>
                <Route path="/register" component = {Registration}/>
                <Route path="/login" component = {Login}/>
                <Route path="/products" component = {Product}/>
                <Route path="/checkoutpage" component = {CheckoutPage}/>                
                <Route path="/cartpage" component = {Cartpage}/>                
                <Route path="/productdetail" component = {SingleProduct}/>  
                <Route path="/rentcart" component = {RentCart}/>  

            </div>
        )
    }
}

export default Container;