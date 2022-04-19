import React from 'react'
import loadingGif from '../static/Cube-1s-200px.gif'

const Loading = () => {
  return (
    <>
        <img src={`/${loadingGif}`} alt="Loading..." style={{width: "200px" , display:"block", margin:"auto"}}></img>   
    </>
  )
}

export default Loading;