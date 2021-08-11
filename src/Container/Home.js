import React from 'react'

import { send } from './Notifications/Push'

function Homepage() {

    send("new game on the page", "Preorder now")

    return (
        <div>
            this is home page
        </div>
    )
}

export default Homepage