import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Card from '../Card';
import {Link} from 'gatsby'
import Style from './products.module.css'
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
            price
            description {
              description
            }
            features {
              Area_De_Trabajo
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
  return(<><div className={'h-16 w-16 rounded-full bg-green-500 absolute right-0 top-0 -mr-4 md:-mr-8 -mt-8 text-white flex justify-center'}><p className={'mt-auto mb-auto font-medium'}>stock</p> </div>
<div className={'h-16 w-16 rounded-full bg-green-800 absolute right-0 top-0 -mr-4 md:-mr-8 -mt-8 md:animate-ping opacity-0 md:opacity-100'}></div> </>)
}else{
  return(<><div className={'h-16 w-16 rounded-full bg-red-500 absolute right-0 top-0 -mr-4 md:-mr-8 -mt-8 text-white flex justify-center'}><p className={'mt-auto mb-auto font-medium text-center'}>agotado</p> </div>
  <div className={'h-16 w-16 rounded-full bg-red-800 absolute right-0 top-0 -mr-4 md:-mr-8 -mt-8 md:animate-ping opacity-0 md:opacity-100'}></div> </>)
}}

return(
    <div className={"flex flex-col  md:flex-row md:flex-wrap sm:-mx-3 mt-12 justify-center"}>
  {models.map((node, index)=>(
    <div id={index} className="p-3 md:p-6 m-6 rounded-lg   hover:shadow-xl shadow-md hover:bg-gray-200 relative border-gray-200 border-solid border-2  w-11/12 md:w-5/12" >
      {stock(node)}
      <Link to={'/'+node.title} >
            
              <p className="font-semibold text-xl text-center mb-4">{node.title}</p>
            <div >
                <Img className='rounded-lg shadow-md'fluid={node.images[0].fluid}/>
            </div>
            <p className="font-hairline text-base text-primary text-center mt-5">{"(Área: "+node.features.Area_De_Trabajo+")"}</p>
            <p className="text-center mt-3 font-bold text-primary text-lg md:text-2xl mx-auto p-5 rounded-lg" style={{width:"fit-content"}}>{node.price}</p>
            <p className="text-center mt-3 font-bold text-primary-darker text-lg bg-gray-400 mx-auto p-4 rounded-lg" style={{width:"fit-content"}}>Mas Información</p>
            
           
      </Link>
    </div>
   
    
 


  ))}
            {/*<Link to={'/fresas'} className=" m-4 hover:shadow-xl hover:bg-gray-200 relative border-gray-200 border-solid border   md:w-5/12" >
            {stock({stock:true})}
            <Card>
              <p className="font-semibold text-xl text-center mb-4">FRESAS</p>
              <br/>
              <div >
                <Img className={'rounded-lg'}fluid={data.imageSharp.fluid}/>
              </div>
            </Card>
            </Link>*/}

    </div>
    
)
}