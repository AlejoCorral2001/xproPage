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
            material
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
const examples = data.allContentfulExamples.nodes

let materials = new Array();

examples.map((node)=>{
    if(materials.includes(node.material)==false){
        materials.push(node.material)
    }
    
})
const examplesFilter = (materialFilter) => {
    let examplesFiltered = new Array()
    examples.map((node)=>{
        if(node.material==materialFilter){
            examplesFiltered.push(node)
        }
    })
    console.log(examplesFiltered)  
       return (
        examplesFiltered.map((example)=>(
            <Example example={example}/> 
        ))
       )
      
           
      
        
}


return(
    <div className={"flex flex-col   sm:-mx-3 mt-12 justify-center"}>
    <p className='text-3xl md:text-5xl mx-auto font-semibold mb-10 uppercase  p-6 rounded-lg'>Ejemplos</p>
  {
    materials.map((materialFiltering)=>(
    <div className='my-6 bg-primary-lighter rounded-lg'>
    <p className='text-3xl md:text-3x1 mx-auto font-bold mb-10  text-center uppercase  font-sans'>{materialFiltering}</p>
    {examplesFilter(materialFiltering)}
    </div>
  
)
    )
  
  }
          

    </div>
    
)
}