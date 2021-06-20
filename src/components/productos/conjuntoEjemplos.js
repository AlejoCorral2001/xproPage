import React from 'react'
import {useState} from 'react'
import {Collapse} from 'react-collapse'
import Style from './conjuntoEjemplos.module.css'
export default (props) => {
    const opened = props.opened
    const rotation=opened==true?"rotate(180deg)":"scale(1.25)"
    const materialFiltering = props.material
    const width = props.opened?"100%":"300px"
    const height = props.opened?"":"300px"
    return(<>
        
        <div className="relative mt-6  " style={{width:width, height:height, margin:props.opened?"":"50px"}}>
            
            <div  className='bg-primary-lighter rounded-lg flex flex-col justify-center' style={{transition:"all ease-in-out 300ms",width:width, height:height}}>
            <div className={Style.arrow} style={{transform:rotation}} onClick={()=>{props.switch(props.index)}}></div>
        
                 <p className='text-3xl md:text-3x1 mx-auto font-bold mb-6  text-center  uppercase  font-sans'>{materialFiltering}</p>
                 
                     <Collapse isOpened={props.opened} > 
                     <div>
                     {props.func(materialFiltering)}
                     </div>
                    
                    </Collapse>
            </div>
        </div>
   </>
    )
}
