import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Card from '../Card';
import {Link} from 'gatsby'
import Fresa from './fresa'
import {useState} from 'react'
export default ()=>{
const data = useStaticQuery(graphql`
query{
  
  allContentfulFresas {
    nodes{
      name
      available
      price
      picture{
        fluid(quality:50){
                        
          ...GatsbyContentfulFluid
         }  
    
      }
      description {
        description
      }
    }
  }
      
}


`)

const [bigOne, setBigOne] = useState(0);
const enlarge = (index) => {
  setBigOne(index+1)
}
const fresas = data.allContentfulFresas.nodes
let result=0;

const stock = (obj)=>{if(obj.available==true){
  return(<><div className={'h-16 w-16 rounded-full bg-green-500 absolute right-0 top-0 -mr-4 -mt-4 text-white flex justify-center'}><p className={'mt-auto mb-auto font-medium'}>stock</p> </div>
<div className={'h-16 w-16 rounded-full bg-green-800 absolute right-0 top-0 -mr-4 -mt-4 animate-ping'}></div> </>)
}else{
  return(<><div className={'h-16 w-16 rounded-full bg-red-500 absolute right-0 top-0 -mr-4 -mt-4 text-white flex justify-center'}><p className={'mt-auto mb-auto font-medium text-center'}>agotado</p> </div>
  <div className={'h-16 w-16 rounded-full bg-red-800 absolute right-0 top-0 -mr-4 -mt-4 animate-ping'}></div> </>)
}}

return(
    <div className="container mx-auto px-2 flex flex-wrap justify-center"> 
  {fresas.map((node, index)=>(
    <Fresa obj={node} size={bigOne==index+1?true:false} func={() => {enlarge(index)}}/>
  ))}
    </div>
    
)
}
    
