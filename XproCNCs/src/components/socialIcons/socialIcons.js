import React from "react"
import Style from "./socialIcons.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebookSquare,
  faInstagram,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons"
import useWidth from '../../hooks/useWidth'
export default (props) => {
  const width = useWidth()
  let size = width<1000?'2x':"3x"
  if(props.size!=null){
     size = Math.round(width/300)+"x"
  }
 
  
  return (
    <div className={Style.container} style={props.style}>
    <a href="mailto:xprocnc@gmail.com">
      <div className={Style.EnvelopDiv}>
        <FontAwesomeIcon
          className={Style.iconEnvelop}
          size={size}
          icon={faEnvelope}
        />
      </div>
      </a>
      <a href='tel:0351157889350'>
      <div className={Style.PhoneDiv}>
        <FontAwesomeIcon
          className={Style.iconPhone}
          size={size}
          icon={faPhone}
        />
      </div>
      </a>
    {/*   <a href="https://www.facebook.com/cncxpro.router">
      <div className={Style.FacebookDiv}>
        <FontAwesomeIcon
          className={Style.iconFacebook}
          size={size}
          icon={faFacebookSquare}
        />
      </div>
      </a>
      <a href="https://www.instagram.com/xprocncs/?hl=es-la">
      <div className={Style.InstagramDiv}>
        <FontAwesomeIcon
          className={Style.iconInstagram}
          size={size}
          icon={faInstagram}
        />
      </div>
      </a> */}
      <a href="https://wa.me/5493517889350/?text">
      <div className={Style.WhatsappDiv}>
        <FontAwesomeIcon
          className={Style.iconWhatsapp}
          size={size}
          icon={faWhatsapp}
        />
      </div>
      </a>
    </div>
  )
}
