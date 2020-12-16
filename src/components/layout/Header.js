import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import {Link} from 'gatsby'
import useWidth from '../../hooks/useWidth'
import {useState} from 'react'
import Style from './Header.module.css'

const click = (func, state) =>{
  func(!state)
  console.log('se presiono')
}
const Header = (props) => {
  const width = useWidth()
  const [opened, setOpened] = useState(0)
  let result=0
  if(width>800){
    return(

      <header style={{zIndex:'100'}} className="sticky top-0 bg-white shadow" >
        <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
          <div className="flex items-center text-2xl">
            <div className="w-12 mr-3" >
              <LogoIcon />
            </div>
          </div>
          <div className="flex mt-4 sm:mt-0">
            <AnchorLink className="px-4" href="#features">
            <Link to='/' className={((props.type=='index')?'font-bold ':'')}> Inicio</Link>
            </AnchorLink>
            <AnchorLink className="px-4" href="#services">
               <Link to='/location'className={((props.type=='location')?'font-bold':'')}>Ubicación</Link>
            </AnchorLink>
            <AnchorLink className="px-4" href="#stats">
               <Link to='/catalogue'className={((props.type=='catalogue')?'font-bold':'')}>Catálogo</Link>
            </AnchorLink>
            <AnchorLink className="px-4" href="#stats">
               <Link to='/info'className={((props.type=='info')?'font-bold':'')}>Nosotros</Link>
            </AnchorLink>
            <AnchorLink className="px-4" href="#testimonials">
              <Link to='/contact'className={((props.type=='contact')?'font-bold':'')}>Contacto</Link>
            </AnchorLink>
          </div>
          <div className="hidden md:block">
          
          </div>
        </div>
      </header>
    )
  }
  else{
    if(opened==0){
    result=(
      <div className={Style.main}>
      
  <div className={Style.headerPhone}>
       <div className={'w-8 m-1 fixed top-0 left-0'}> <LogoIcon /></div>
       <div   onClick={()=>click(setOpened, opened)} className={Style.buttonContainer}><div  id={'hamDeployer'} className={Style.hamburger}></div> </div>
       
      </div>
      </div>
    
 
    )      
    }else{
      result=(
        <div className={Style.main}>
       
          <div onClick={()=>click(setOpened, opened)} className={Style.buttonContainer}><div id={'hamDeployer'} className={Style.hamburgerCruz}></div> </div>
          
       
        <div  className={Style.gigantCentered} >
      
            <AnchorLink className="px-4" href="#features">
            <Link to='/' className={((props.type=='index')?'font-bold ':'')}> Inicio</Link>
            </AnchorLink>
            <AnchorLink className="px-4" href="#services">
               <Link to='/location'className={((props.type=='location')?'font-bold':'')}>Ubicación</Link>
            </AnchorLink>
            <AnchorLink className="px-4" href="#stats">
               <Link to='/catalogue'className={((props.type=='catalogue')?'font-bold':'')}>Catálogo</Link>
            </AnchorLink>
            <AnchorLink className="px-4" href="#stats">
               <Link to='/info'className={((props.type=='info')?'font-bold':'')}>Nosotros</Link>
            </AnchorLink>
            <AnchorLink className="px-4" href="#testimonials">
              <Link to='/contact'className={((props.type=='contact')?'font-bold':'')}>Contacto</Link>
            </AnchorLink>
         
        </div>
        </div>
       
        
       )  
    }
    return(
      result
      )
  }
  }
export default Header;
