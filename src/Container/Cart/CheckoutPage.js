import React from 'react'

function CheckoutPage() {
    return(
        <div className="checkout">
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            {/* <th scope="col">S.N </th> */}
                            <th scope="col"> Products </th>
                            <th scope="col"> Quantity </th>
                            <th scope="col"> Rent Price (Rs/Day) </th>
                            <th scope="col"> Buy Price </th>
                        </tr>
                    </thead>
                    <tbody>{
                        // this.state.product.map((p) => (

                            <tr>
                                {/* <th scope="row">1</th> */}
                                <td>FIFA 21</td>
                                <td>13</td>
                                <td>123</td>
                                <td>0</td>
                                {/* {this.calculateSubTotal( )} */}
                            </tr>
                        // ))
                    }</tbody>
                </table>


                <table className="billing table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Sub-Total</th>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Tax ( 13% )</th>
                            <td><s>13% of Sub-total</s></td>
                        </tr>
                        <tr>
                            <th scope="row">Shipping Cost</th>
                            <td><s> Rs. 200</s></td>
                        </tr>
                        <tr>
                            <th scope="row">Grand Total</th>
                            <th></th>
                        </tr>
                    </tbody>
                </table>

                <div className="paymentdiv">
                    <div className=" row paymentmethods">
                        <div>
                            <h2>Select a Payment Method</h2>
                        </div>

                        <select id="payment">
                            <option value="esewa" disabled > ESewa</option>
                            <option value="cash">Cash On Delivery</option>
                            <option value="fonepay" disabled>Fonepay</option>
                            <option value="cards" disabled>Credit/Debit Cards</option>

                        </select>

                        {/* <div>
                            <img src="./esewa.png" width="150px" style={{ cursor: "not-allowed" }} />
                        </div>

                        <div>
                            <img src="./fonepay_logo.png" width="150px" style={{ cursor: "not-allowed" }} />
                        </div>

                        <div>
                            <button class="btn btn-secondary btn-lg" > Cash on Delivery </button>
                        </div> */}
                    </div>
                </div>



                <div>
                    <button type="button" className="btn btn-primary btn-lg"> Confirm Order </button>
                </div>


            </div>
    )
}

export default CheckoutPage