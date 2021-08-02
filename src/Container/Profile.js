import React from 'react';

function Profile() {

    function RentedOrder() {
        window.location.href = ('/rentorder')
    }

    
    return (
        <div className="Profile">

            <button className="OrderButton" onClick={() => RentedOrder()}>
                Rented Products
            </button>
        </div>
    )
}

export default Profile