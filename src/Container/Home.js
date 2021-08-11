import React from 'react'
import { send } from './Notifications/Push'
send("new game on the page", "Preorder now")

function Homepage() {
    return (
        <div>
            this is home page
        </div>

        
    )
}

export default Homepage