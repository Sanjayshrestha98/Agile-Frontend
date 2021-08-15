import React from 'react'

import { send } from './Notifications/Push'

function Homepage() {

    send("New Games In The Store", "Check Them Out")

    return (
        <div>
            Home Page
            
        </div>
    )
}

export default Homepage