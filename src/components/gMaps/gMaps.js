import Style from './gMaps.module.css'
import React from 'react'
import useHeight from '../../hooks/useHeight'

export default (props) => {
    
   const height = useHeight()*0.6

  
  
    return(  
    <div className={Style.map} style={{height:height+'px'}}>
        <iframe
        style={{borderRadius: '6%'}}
        src="https://maps.google.com/maps?width=100%250&amp;hl=es&amp;q=cpc%20arguello+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        ></iframe>
    </div>
    )
}