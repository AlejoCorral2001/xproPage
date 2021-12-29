import {
    faWhatsapp
  } from "@fortawesome/free-brands-svg-icons"
  import React from "react"
  import Style from "./socialIcons.module.css"
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" 
  import useWidth from '../../hooks/useWidth'
  export default (props) => {
    const width = useWidth()
    let size = width<1000?'2x':"3x"
    if(props.size!=null){
       size = Math.round(width/300)<4?'3x':Math.round(width/400)+'x'   
    }
    return (
            <a href="https://api.whatsapp.com/send/?phone=5493517889350&text=Hola!+Me+comun%C3%ADco+desde+la+p%C3%A1gina+www.xprocncs.com">
                <div className={Style.WhatsappDiv} style={{zIndex:"10"}}>
                    <FontAwesomeIcon
                        className={Style.iconWhatsappFixed}
                        size={size}
                        icon={faWhatsapp}
                    />
                </div>
            </a>
       
    )
  }
  