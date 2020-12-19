import React from 'react';
import Footer from './Footer';
import Header from './Header';
import {useState} from 'react'
const Layout = (props) => {
if(props.type=='index'){
const [content, setContent] = useState(
  <>
 
     <>
    hola
    </>
  
  </>
)
 setTimeout(() => {setContent((
  <>
    <Header type={props.type}/>
    <main className="text-gray-900">{props.children}</main>
    <Footer type={props.type}/>
  </>
))
},
1000
)
  return (
    <>
    {content}
    </>
    )
}

else{
  return (
    <>
    <Header type={props.type}/>
    <main className="text-gray-900">{props.children}</main>
    <Footer type={props.type}/>
  </>)

}

};

export default Layout;
