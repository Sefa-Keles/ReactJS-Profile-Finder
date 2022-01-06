import React, {Fragment} from 'react'
import loading from "../static/loading.gif"

export const Loading = () => {
    return (
        <Fragment>
            <img src={loading} alt="Loading..." style={{withh: "200px", display:"block", margin: "auto"}}/>
        </Fragment>
    )
}

export default Loading
