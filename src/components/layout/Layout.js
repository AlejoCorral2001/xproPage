import React from 'react';
import Footer from './Footer';
import Header from './Header';
import {useState} from 'react'
import Img from 'gatsby-image'
import Style from './presentation.module.css'
import {useStaticQuery, graphql} from 'gatsby'
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
    <main className="text-gray-900">{props.children}</main>
    <Footer type={props.type}/>
  </>
))
},
2000
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
