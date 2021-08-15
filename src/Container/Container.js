import { useState } from "react";
import Registration from "./Registration";
import Login from "./Login";
import { Route } from "react-router-dom";
import Header from "../Header/Header";
import Product from "./Product";
import CheckoutPage from "./Cart/CheckoutPage";
import Cartpage from "./Cart/Cartpage";
import SingleProduct from "./SingleProduct";
import RentCart from "./Cart/RentCart";
import Favourite from "./Cart/Favourite";
import RentBill from "./Cart/RentBill";
import Genre from "./Genre";
import Profile from "./Profile";
import Order from "./Order";
import RentOrder from "./Cart/RentOrder";
import FAQ from "./FAQ";

function Container() {

    return (
        <div>
            <Header>        </Header>
            <Route path="/register" component={Registration} />
            <Route path="/login" component={Login} />
            <Route path="/products" component={Product} />
            <Route path="/checkoutpage" component={CheckoutPage} />
            <Route path="/cartpage" component={Cartpage} />
            <Route path="/productdetail" component={SingleProduct} />
            <Route path="/rentcart" component={RentCart} />
            <Route path="/favourite" component={Favourite} />
            <Route path="/rentbill" component={RentBill} />
            <Route path="/genre/:category" component={Genre} />
            <Route path="/profile" component={Profile} />
            <Route path="/order" component={Order} />
            <Route path="/rentorder" component={RentOrder} />
            <Route path="/faq" component={FAQ} />
        </div>
    )
}

export default Container;