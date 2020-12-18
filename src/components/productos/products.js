import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Card from '../Card';
import {Link} from 'gatsby'
export default ()=>{
const data = useStaticQuery(graphql`
query{
  imageSharp(fixed: {originalName: {eq: "variasFresas.jpg"}}) {
    id
    fluid{
      ...GatsbyImageSharpFluid
    }
  }
    allContentfulCncMachine {
      
          nodes {
            title
            stock
            description {
              description
            }
            images {
              
                    fluid(quality:50){
                        
                        ...GatsbyContentfulFluid
                }
               
            }
          }
        }
      
}
`)

const models = data.allContentfulCncMachine.nodes
let result=0;

const stock = (obj)=>{if(obj.stock==true){
  return(<><div className={'h-16 w-16 rounded-full bg-green-500 absolute right-0 top-0 -mr-4 -mt-4 text-white flex justify-center'}><p className={'mt-auto mb-auto font-medium'}>stock</p> </div>
<div className={'h-16 w-16 rounded-full bg-green-800 absolute right-0 top-0 -mr-4 -mt-4 animate-ping'}></div> </>)
}else{
  return(<><div className={'h-16 w-16 rounded-full bg-red-500 absolute right-0 top-0 -mr-4 -mt-4 text-white flex justify-center'}><p className={'mt-auto mb-auto font-medium text-center'}>agotado</p> </div>
  <div className={'h-16 w-16 rounded-full bg-red-800 absolute right-0 top-0 -mr-4 -mt-4 animate-ping'}></div> </>)
}}

return(
    <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12  ">
  {models.map((node)=>(
    <Link to={'/'+node.title} className="flex-1 m-5 hover:shadow-xl hover:bg-gray-200 relative border-gray-200 border-solid border" >
            {stock(node)}
            <Card>
              <p className="font-semibold text-xl text-center mb-4">{node.title}</p>
            <div >
                <Img className={'rounded-lg'}fluid={node.images[0].fluid}/>
            </div>
            </Card>
            </Link>
   
    
 


  ))}
            <Link to={'/fresas'} className="flex-1 m-5 hover:shadow-xl hover:bg-gray-200 relative border-gray-200 border-solid border" >
            <Card>
              <p className="font-semibold text-xl text-center mb-4">FRESAS</p>
              <br/>
              <div >
                <Img className={'rounded-lg'}fluid={data.imageSharp.fluid}/>
              </div>
            </Card>
            </Link>

    </div>
    
)
}