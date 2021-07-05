import { Component } from "react";
import Registration from "./Registration";


class Container extends Component{
    render(){
        return(
            <div>
                <Route path="/register" component = {Registration}/>

            </div>
        )
    }
}

export default Container;