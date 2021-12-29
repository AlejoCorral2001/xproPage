import React from 'react';
import Footer from './Footer';
import Header from './Header';
import {useState} from 'react'
import Img from 'gatsby-image'
import Style from './presentation.module.css'
import {useStaticQuery, graphql} from 'gatsby'
import Whatsapp from "../../components/socialIcons/whatsappIcon"
const Layout = (props) => {
  const data = useStaticQuery(graphql`
query{
  imageSharp(fixed: {originalName: {eq: "logo.png"}}) {
    id
    fluid{
      ...GatsbyImageSharpFluid
    }
  }
     
}
`)
if(props.type=='index'){
const [content, setContent] = useState(
  <>
 
     <>
    <div className={'flex text-center justify-center'}>
    <Img fluid={data.imageSharp.fluid} className={Style.animate}/>
    </div>
    </>
  
  </>
)
 setTimeout(() => {setContent((
  <>
    <Header type={props.type}/>
    <Whatsapp size={"auto"} className="fixed"/>
    <main className="text-gray-900">{props.children}</main>
    <Footer type={props.type}/>
  </>
))
},
1500
)
  return (
    <>
    {content}
    </>
    )
}

else{
  return (
    <div>
    <Header type={props.type}/>
    <Whatsapp size={"auto"} className="fixed"/>
    <main className="text-gray-900">{props.children}</main>
    <Footer type={props.type}/>
    </div>
    )

}

};

export default Layout;
