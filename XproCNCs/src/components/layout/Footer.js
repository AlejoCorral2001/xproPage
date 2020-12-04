import React from 'react';
import Icons from '../socialIcons/socialIcons'
const Footer = (props) => {
  if(props.type!='contact'){
    return(
    <footer className="container mx-auto py-16 px-3 mt-48  text-gray-800">
    <div className="flex justify-center -mx-3">
      <div className=" px-3 mx-auto ">
        <p className="mt-5">@Todos los derechor reservados XPRO CNCs</p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold text-center">Contacto</h2>
        <div className='mx-auto object-contain'><Icons/></div>
      
      </div>
    </div>
  </footer>
  )
  }else{
    return(
    <div> <p className="mt-5 text-center" >@Todos los derechor reservados XPRO CNCs</p></div>
    )
  }

};

export default Footer;
