import React from 'react'
import loading from "./loading.gif"

export const Loading = () => {
    return (
        <React.Fragment>
            <img src={loading} alt="Loading..." style={{withh: "200px", display:"block", margin: "auto"}}/>
        </React.Fragment>
    )
}

export default Loading
