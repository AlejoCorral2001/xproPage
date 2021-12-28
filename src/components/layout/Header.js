import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import {Link} from 'gatsby'
import useWidth from '../../hooks/useWidth'
import {useState} from 'react'
import Style from './Header.module.css'
import { Collapse } from 'react-collapse';
import Submenu from './submenu'

const click = (func, state) =>{
  func(state)
}

const Header = (props) => {
  const width = useWidth()
  const [closeAll, setCloseAll] = useState(false)
  //const [widthCheck, setWidthCheck] = useState(false);
  //if(width>800 && widthCheck==false){ //se checkea si se actualizo la width si no se actualizo y la width es mayor a 800 se cierra el catalogo 
  //  setWidthCheck(true)
  //  setCatalogOpened(false)
  //  setExamplesOpened(false)
  //}

  const pages = (
    <>
    <AnchorLink className="px-4" href="#features">
    <Link to='/' className={((props.type=='index')?'font-bold ':'')}>Inicio</Link>
    </AnchorLink>
    <AnchorLink className="px-4" href="#services">
       <Link to='/location'className={((props.type=='location')?'font-bold':'')}>Ubicación</Link>
    </AnchorLink>
    <Submenu props={props} defaultOpened={width<800} name={"Catálogo"} links={[["Routers","catalogue"],["Fresas","fresas"]]}/>
    <Submenu props={props} defaultOpened={width<800} name={"Ejemplos"} links={[["Trabajos","examples"],["Videos","videos"]]}/>
    <AnchorLink className="px-4" href="#stats">
       <Link to='/info'className={((props.type=='info')?'font-bold':'')}>Nosotros</Link>
    </AnchorLink>
    <AnchorLink className="px-4" href="#testimonials">
      <Link to='/contact'className={((props.type=='contact')?'font-bold':'')}>Contacto</Link>
    </AnchorLink>
    
    </>)
  
  const [opened, setOpened] = useState(0)
  let result=0
  if(width>800){
    return(

      <header style={{zIndex:'100'}} className="sticky top-0 bg-white shadow" >
        <div className="container flex flex-row justify-between items-center mx-auto py-4 px-8">
          <div className="flex items-center text-2xl">
            <div className="w-12 mr-3" >
              <LogoIcon />
            </div>
          </div>
          <div className="flex mt-4 sm:mt-0 text-lg">
           {pages}
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
       <div className={'w-8 m-1 fixed top-0 left-0'}> 
        <LogoIcon/>
       </div>
       <div onClick={()=>click(setOpened, true)} className={Style.buttonContainer}><div  id={'hamDeployer'} className={Style.hamburger}></div> </div>
       
      </div>
      </div>
    
 
    )      
    }else{
      result=(
        <div className={Style.main}>
       
          <div onClick={()=>click(setOpened, false)} className={Style.buttonContainer}><div id={'hamDeployer'} className={Style.hamburgerCruz}></div> </div>
          
       
        <div  className={Style.gigantCentered} >
      
        {pages}
         
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
