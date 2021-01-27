import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Card from '../Card';
import {Link} from 'gatsby'
import Style from './products.module.css'
import { useState, useEffect, useRef } from "react"
import useWidth from '../../hooks/useWidth.js'
import useHeight from '../../hooks/useHeight.js'
export default (props)=>{
    const [pictureNumber,setPictureNumber] = useState(0)
    useEffect(() => {
        const timeoutId=setTimeout(() => {
           
           setPictureNumber(pictureNumber==(props.example.images.length-1)?0:pictureNumber+1)
           
          }, 5000)
    })

const example = props.example

const widthRaw = useWidth();  //calculo tentativo del width
let width = 0
width =( widthRaw - widthRaw / 10)-100


let aspectMin=example.images[0].fluid.aspectRatio //calculo del minimo aspect ratio
example.images.map((node)=>{
  aspectMin=node.fluid.aspectRatio<aspectMin?node.fluid.aspectRatio:aspectMin
})

const heightRaw = useHeight()
let height = width * 1/aspectMin
if (height > heightRaw - 200 ){
  width = (heightRaw - 200) * aspectMin
}

const maxHeight = (width * 1 / aspectMin)+100



return(
 
    <div className= {" m-4 hover:shadow-xl hover:bg-gray-200 relative border-gray-200 border-solid border p-10 rounded-lg mx-auto bg-orange-200"}  style={{height:maxHeight+'px', width:(width+100)+'px'}} >
              <p className="font-semibold text-xl text-center mb-4">{example.title}</p>
            <div className='flex items-center align-middle' style={{height:(maxHeight-100)+'px'}}>
                <Img   className={'rounded-lg mx-auto'} fluid={example.images[pictureNumber].fluid}  style={{width:width}}/>
            </div>
    </div>

)
}