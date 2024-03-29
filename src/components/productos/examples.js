import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Card from '../Card';
import {Link} from 'gatsby'
import Example from './example'
import ConjuntoEjemplos from './conjuntoEjemplos'
import {useState} from 'react'
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

examples.map((node)=>{  //detecto que materiales tengo 
    if(materials.includes(node.material)==false){
        materials.push(node.material)
    }
    
})
const examplesFilter = (materialFilter) => {    //devuelve todos lo ejemplos del material mandado como argumento
    let examplesFiltered = new Array()
    examples.map((node)=>{
        if(node.material==materialFilter){
            examplesFiltered.push(node)
        }
    })
    
       return (
        examplesFiltered.map((example)=>(
            <Example example={example}/> 
        ))
       )

        
}

const [indexOpened, setIndexOpened] = useState(0);
const switchExamples = (number) =>{
    if(indexOpened==number+1){
        setIndexOpened(0)
    }else{
        setIndexOpened(number+1)
    }
    
    
}
const openExamples = (number) =>{
    if(indexOpened!=number+1){
        setIndexOpened(number+1)  
    }
    
       
}
const close = () =>{
    setIndexOpened(0)
}
return(
    <>
    <p className='text-3xl md:text-5xl mx-auto font-semibold mb-10 uppercase text-primary-darker p-6 rounded-lg text-center'>Ejemplos</p>
    <div className={"flex flex-row  flex-wrap sm:-mx-3 mt-12 justify-center items-center align-baseline "}>
    
  {
    materials.map((materialFiltering , index)=>(
    <ConjuntoEjemplos  material={materialFiltering} index={index} func={examplesFilter} opened={indexOpened==index+1?true:false} switch={switchExamples} open={openExamples} />
  
)
    )
  
  }
          

    </div>
    </>
)
}