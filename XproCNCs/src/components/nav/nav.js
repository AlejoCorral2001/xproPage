import React from 'react'
import navStyle from './nav.module.css'
import {Link} from 'gatsby'
import {useState, useEffect, useRef} from 'react'
import Width from '../../hooks/useWidth.js'


export default (props) => {
    const input = useRef();
    const [attached, setAttach] = useState(false);
    const [notIndex] = useState(props.notIndex);
    const width = Width()
    const [hamburger, setHamburger] = useState(false)
    const mobileNav = ()=>(
        <div className={navStyle.gigantCentered} >
            <Link  to='/' className={props.page=='home'?navStyle.unitSelected:navStyle.unitPhone}>Home</Link>
            <Link to='./contact' className={props.page=='contact'?navStyle.unitSelected:navStyle.unitPhone} >Contact</Link>
            <Link  to='./Information' className={props.page=='information'?navStyle.unitSelected:navStyle.unitPhone} >Information</Link>
        </div>
        )
    
    const scrolled =()=>{
        setAttach(window.scrollY>15?true:false);
    }
    const hamburgerEffect = () =>{
        setHamburger(!hamburger)
    }
    useEffect(()=>{
        const {current} = input;
        if(current){
          current.addEventListener('click', hamburgerEffect)
        }
        window.addEventListener('scroll',scrolled)
        return()=>{
            const {current} = input;
            if(current){
                current.removeEventListener('click', hamburgerEffect)
              }
             window.removeEventListener("scroll",scrolled);
        }
    })
     let content = (
        <div className={notIndex?null:navStyle.container}>
        <div className={!notIndex?attached!==true?navStyle.header:navStyle.headerA:navStyle.headerNotIndex}>
        <img className={navStyle.img} src='../images/logo.jpg' alt='no se' height='75%'/>
        <ol className={!notIndex?attached!==true?navStyle.nav:navStyle.navA:navStyle.navA}>
            <Link  to='/' className={!notIndex?attached!==true?navStyle.unit:navStyle.unitA:navStyle.unitA} >Home</Link>
            <Link to='./contact' className={!notIndex?attached!==true?navStyle.unit:navStyle.unitA:navStyle.unitA} >Contact</Link>
            <Link  to='./Information' className={!notIndex?attached!==true?navStyle.unit:navStyle.unitA:navStyle.unitA} >Information</Link>
    
        </ol>
        </div>
        </div>
     
    )
    if (width<700){
         content = (
             <>
             <div className={navStyle.box}></div>
            <div className={navStyle.headerPhone}>
            <img className={navStyle.img} src='../images/logo.jpg' alt='no se' height='75%'/>
            <ol className={navStyle.navPhone}>
                <div className={navStyle.hamburgerBox} ref={input}>
                 <div className={hamburger?navStyle.hamburgerCruz:navStyle.hamburger}></div>
                 {hamburger?mobileNav():null}
                </div>
              
              
                </ol>
        </div>
        </>
         )
        
    }
    return(
  content
)}