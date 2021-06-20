import React from 'react'
import {useState} from 'react'
import {Collapse} from 'react-collapse'
import Style from './conjuntoEjemplos.module.css'
export default (props) => {
    const opened = props.opened
    const rotation=opened==true?"rotate(180deg)":""
    const materialFiltering = props.material
    const cerrar = props.opened==true?(<div className="absolute right-0 top-0 mt-3 mr-3 bg-white rounded-lg text-primary-darker text-2xl  flex items-center justify-center p-auto font-bold w-20  h-8" style={{zIndex:"1"}} onClick={props.close}>
    cerrar
     </div>)
     :<>hola</>
    return(<>
        
        <div className="relative mt-6 ">
            
            <div  className='bg-primary-lighter rounded-lg '>
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
