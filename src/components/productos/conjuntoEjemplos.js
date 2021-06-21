import React from 'react'
import {useState} from 'react'
import {Collapse} from 'react-collapse'
import Style from './conjuntoEjemplos.module.css'
export default (props) => {
    const opened = props.opened
    const rotation=opened==true?"rotate(180deg)":"scale(1.25)"
    const materialFiltering = props.material
    const width = props.opened?"100%":"280px"
    const height = props.opened?"":"280px"
  
    const collapsing = (obj) =>{
    console.log(obj.isOpened)   //true si se dijo que se abra
    
    }
    return(<>
        
        <div className="relative mt-6  "  onClick={()=>{props.open(props.index)}} style={{width:width, height:height, margin:props.opened?"":"50px"}}>
            
            <div  className='bg-primary-lighter rounded-lg flex flex-col justify-center' style={{transition:"all ease-in-out 100ms",width:width, height:height}}>
            <div className={Style.arrow} style={{transform:rotation}} onClick={()=>{props.switch(props.index)}}></div>
        
                 <p className='text-3xl md:text-3x1 mx-auto font-bold mb-6  text-center  uppercase  font-sans'>{materialFiltering}</p>
                    
                     <Collapse onWork={collapsing}isOpened={props.opened}> 
                     <div>
                     {props.func(materialFiltering)}
                     </div>
                    
                    </Collapse>
            </div>
        </div>
   </>
    )
}
