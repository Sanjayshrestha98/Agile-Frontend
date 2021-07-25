import React from 'react';

function RentCart() {
    return(




        
        <div>
            <div className="title">
                <h1>Your Rent Cart</h1>
            </div>
            <div className="checkout">

                <table className="table table-borderless">
                    <thead>
                        <tr>
                            {/* <th scope="col">S.N </th> */}
                            <th scope="col"> Product Image </th>
                            <th scope="col"> Products </th>
                            <th scope="col"> Quantity </th>
                            <th scope="col"> Price (Rs) </th>
                            <th scope="col"> Rented for </th>
                            <th scope="col"> Actions </th>
                        </tr>
                    </thead>
                    <tbody>{

                        // this.state.product.map((p) => (
                        <tr>
                            {/* <th scope="row">1</th> */}
                            <td><img width="50px" alt="productimage" /></td>
                            <td>product_name</td>
                            {/* <td><input type="number" value="1" min="1" max="20" step="1" /></td> */}
                            <td>quantity</td>
                            <td>price</td>
                            {/* {this.calculateSubTotal(p.product.product_price, p.quantity)} */}
                            <td><button >Remove</button></td>
                        </tr>

                        // ))

                    }</tbody>
                </table>


                <div className="total">

                    <h3>Your Total</h3>

                    <div className="amount">

                        <h4>
                            {/* <>{this.calculateTotal()}</> */}

                            21321

                        </h4>
                    </div>

                </div>

                <div>
                    <a href="/checkout">
                        <button type="button" className="btn btn-primary btn-lg"> Checkout </button>
                    </a>
                </div>

            </div>

        </div>
    )
}

export default RentCart