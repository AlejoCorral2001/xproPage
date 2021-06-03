import React from 'react'
import {useState} from 'react'
export default (props) => {
   const opened = props.opened
    const materialFiltering = props.material
    const cerrar = props.opened==true?(<div className="absolute right-0 top-0 mt-3 mr-5 bg-white rounded-lg text-primary-darker text-2xl  flex items-center justify-center p-auto font-bold w-20  h-8" style={{zIndex:"1"}} onClick={props.close}>
    cerrar
     </div>)
     :<></>
    return(
        <div className="relative mt-6 ">
            {cerrar}
            <div style={{transition:"ease-in-out 2s"}} className='bg-primary-lighter rounded-lg ' onClick={()=>{props.open(props.index)}}>
        
                 <p className='text-3xl md:text-3x1 mx-auto font-bold mb-6  text-center  uppercase  font-sans'>{materialFiltering}</p>
                 {opened==true?props.func(materialFiltering):<></>}
            </div>
        </div>
   
    )
}
