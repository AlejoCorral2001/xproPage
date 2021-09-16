import React from 'react'
import Img from 'gatsby-image'
import Card from '../Card';
import {Link} from 'gatsby'
import {useState} from 'react'
import useWidth from '../../hooks/useWidth'
import Style from './products.module.css'
export default (props)=>{
let node = props.obj

const width = useWidth()
console.log(width)
let size = '50%'
if(width<500){
    size=(props.size==true?'100%':'85%')
}else{
    size=(props.size==true?'75%':'35%')
}


const carrito = props.cantidad
const extra = props.size?(
    <>
    <div className='text-center p-2 font-medium border-gray-900  m-6 text-lg '>{node.description.description}</div>
    <div className='text-center p-2 font-medium border-gray-900  m-6 text-xl'>{node.price}</div>
    <div className='text-center p-2 font-medium border-gray-900  m-6 font-serif text-lg mx-auto rounded-lg' style={{width:'fit-content',backgroundColor:node.available==true?'#48bb78':'#fc8181'}}>{node.available==true?'disponible':'agotado'}</div>
    <p className="text-white text-xl md:text-4xl font-mono font-semibold text-center mb-2">CANTIDAD:</p>
    <div className='flex  justify-center mx-auto bg-gray-400 rounded-lg' style={{width:"fit-content"}}>
        <div className='font-bold text-4xl md:text:6x1 px-3 sm:px-4 md:px-6 lg:px-8 text-primary-darker' onClick={props.remove}>-</div>
        <div className='font-bold text-4xl md:text:6x1 px-3 sm:px-4 md:px-6 lg:px-8 text-primary-lighter'>{carrito}</div>
        <div className='font-bold text-4xl md:text:6x1 px-3 sm:px-4 md:px-6 lg:px-8 text-primary-darker' onClick={props.add}>+</div>
    </div>
    </>
):
(
    <p className="text-center mt-8 font-bold text-primary-darker text-base bg-gray-400 mx-auto p-5 rounded-lg md:text-base xl:text:xl" style={width>499&&width<755?{width:"fit-content",fontSize:"0.5rem"}:{width:"fit-content"}}>Información/Agregar</p>
)
return(

 
    <div onClick={props.func} className={Style.transition+" hover:shadow-xl bg-orange-300 m-2 p-2 md:m-3 md:p-4  rounded-lg"} style={{width:size, backgroundColor: props.size?'#f6ad55':'#fbd38d'}} >
          
            <p className="font-semibold text-sm text-center mb-4 h-12  sm:text-xl">{node.name}</p>
            <Img className='rounded-lg w-full' fluid={node.picture.fluid}/>
            
            
            {extra}
           
    </div>
    
)
}
    
