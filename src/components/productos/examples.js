import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Card from '../Card';
import {Link} from 'gatsby'
import Example from './example'
export default ()=>{
    const data = useStaticQuery(graphql`
    query{allContentfulExamples {
        nodes {
         
            id
            title
            images {
               
                fluid(quality:50){
                    aspectRatio
                    ...GatsbyContentfulFluid
            }
            }
        }
      }
    }
    `)

return(
    <div className={"flex flex-col   sm:-mx-3 mt-12 justify-center"}>
  {data.allContentfulExamples.nodes.map((node)=>(
    <Example example={node}/>
  ))}
          

    </div>
    
)
}