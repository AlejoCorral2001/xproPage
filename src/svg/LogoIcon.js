import React from 'react';
import Img from 'gatsby-image'
import {useStaticQuery, graphql} from 'gatsby'

const LogoIcon = () => {
  const data = useStaticQuery(

    graphql`
    query query1{
      imageSharp(fixed: {originalName: {eq: "logo.png"}}) {
        id
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
    `

  )
  return (
    <div className='' style={{height:'fit-content'}}>
      <Img className='rounded-lg'  fluid={data.imageSharp.fluid} />
    </div>
 
  
  )
  }

export default LogoIcon;

