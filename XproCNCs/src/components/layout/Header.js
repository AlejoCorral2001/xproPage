import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import {Link} from 'gatsby'
const Header = (props) => {
 
  return(

  <header style={{zIndex:'100'}} className="sticky top-0 bg-white shadow" >
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3 animate-spin" >
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
export default Header;
