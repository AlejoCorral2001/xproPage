import React from "react"
import { useState, useEffect, useRef } from "react"
import Style from "./instagram.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import useWidth from "../../hooks/useWidth.js"
import useHeight from '../../hooks/useHeight.js'


export default (props) => {
  let indexI = useRef(0);
  const [bShadow, setBShadow] = useState(0)
  const [update, setUpdate] = useState(1)
  let width = 50
  const useWidthVar = useWidth()
  const useHeightVar = useHeight()
  const [timerId,setTimerId]=useState(0);
  const [timerRestartId,setTimerRestartId]=useState(null);
  const [forcedUpdate, setforcedUpdate] = useState(false);
  console.log(useWidthVar)
  const updateDom = () => {
    setforcedUpdate(!forcedUpdate)
  }
 
  if (props.width&&useWidthVar>1023) {
    width = (useHeightVar-50< useWidthVar*(props.width / 100)? (useHeightVar-75): (props.width / 100) * useWidthVar)
  }
  else{
    if(useWidthVar>850 && props.mediumHiguer){
      width = (useHeightVar-50< useWidthVar*(props.width / 100)? (useHeightVar-75): (props.width / 100) * useWidthVar)
    }else{
        width = (useHeightVar-225 < useWidthVar? useHeightVar -420: useWidthVar-200)
         }
    }
  if(width>1100){
    width=1100
  }
  const backButton = () => {
    stopTimer()
    if (indexI.current != 0) {
      indexI.current--;
    } else {
      indexI.current=max;
    }
    updateDom()
  }
  const next = () => {
    if (indexI.current != max) {
      indexI.current++;
    } else {
      indexI.current=0;
    }
    updateDom()
  }
  const nextButton = () => {
    stopTimer()
    if (indexI.current != max) {
      indexI.current++;
    } else {
      indexI.current=0;
    }
    updateDom()
  }
  const timerFunction=()=>{
         next()
        setBShadow(1)
        setTimeout(() => {
          setBShadow(0)
        }, 3000)

        setUpdate(1)
  }
  const stopTimer=()=>{
    const suscribeRestart=()=>{
      return(setTimeout(() => {
        setUpdate(1)
      }, 10000))
    }
    if(timerId!=null){
    clearTimeout(timerId);
    setTimerId(null);
  }
    if(timerRestartId==null){
      setTimerRestartId(suscribeRestart())
    }else{
      clearTimeout(timerRestartId)
      setTimerRestartId(suscribeRestart())
    }
    
  }
  
  useEffect(() => {
    if (update == 1) {
      setUpdate(0)
      const timeoutId=setTimeout(() => {
        timerFunction()
      }, 5000)
      setTimerId(timeoutId)
    }
  
  })

const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          id
          childImageSharp {
            resize {
              aspectRatio
            }
            fluid(quality:50){
              ...GatsbyImageSharpFluid
              
            }
          }
        }
      }
    }
  `)
  const index = indexI.current * width + "px"
  let result
  let node 
  let min_aspectRatio
  let max
  if(props.src){
  
     node = props.src
     min_aspectRatio=0;
     max=0;
    
    node.map((node)=>{
      max++
      if(min_aspectRatio==0||min_aspectRatio>node.resize.aspectRatio){
        min_aspectRatio=node.resize.aspectRatio
      }
    })
    max=max-1

    
      result = node.map((node, index) => {
      const topPercent = (((1/min_aspectRatio)-(1/node.resize.aspectRatio))/2)*100
      const text = (topPercent.toString()+"%")
    
      return (
        <div className={Style.img} key={index}>
        
          <Img
            className={(bShadow == 1 ? Style.effect : Style.imgF)}
            style={{top:text}}
            fluid={node.fluid}
          />
         
        </div>
      )
    })
  
}

  else{
   
    node = data.allFile.nodes
       min_aspectRatio=0;
     max=0;
    node.map((node)=>{
      max++
      if(min_aspectRatio==0||min_aspectRatio>node.childImageSharp.resize.aspectRatio){
        min_aspectRatio=node.childImageSharp.resize.aspectRatio
      }
    })
    max=max-1
  
  
      result = node.map((node, index) => {
      const topPercent = (((1/min_aspectRatio)-(1/node.childImageSharp.resize.aspectRatio))/2)*100
      const text = (topPercent.toString()+"%")
    
      return (
        <div className={Style.img}  key={index}>
     
            <Img
            className={(bShadow == 1 ? Style.effect : Style.imgF)}
            //style={{top:text}}
            fluid={node.childImageSharp.fluid}
            />

       

         
        </div>
      )
    })
  
  } 
  


 
  return (
    <div className={Style.completeScreen} >
      <div onClick={backButton} className={Style.back}>
        {"<"}
      </div>
      <div className={Style.screen} style={{ width: width }}>
     
        <div className={Style.centered} style={{ right: index }}>
          {result}
        </div>
      </div>
      <div onClick={nextButton} className={Style.next}>
        {">"}
      </div>
    </div>
  )
}
//style={bShadow==1?{boxShadow:'0px 0px 3px 5px aliceblue'}:{boxShadow:'0px 0px 0px 0px aliceblue'}}
