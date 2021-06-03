import React from "react"
import Style from "./instagramIframe.module.css"


export default (props) => {

    return (
        <div className={Style.square} >
      {<iframe src="https://snapwidget.com/embed/940599" className={Style.content} allowtransparency="false" frameborder="0" scrolling="no" style={{width:"100%",height:"100%",position:"absolute",top:"0",left:"0"}}></iframe> }
      </div>
    )
}