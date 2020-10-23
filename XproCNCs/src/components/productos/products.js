import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Card from '../Card';
import {Link} from 'gatsby'
export default ()=>{
const data = useStaticQuery(graphql`
query{
    allContentfulCncMachine {
      
          nodes {
            title
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
return(
    <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12  ">
  {models.map((node)=>(
    <Link to={'/'+node.title} className="flex-1 m-5 hover:shadow-xl hover:bg-gray-200" >
    <Card>
              <p className="font-semibold text-xl text-center mb-4">{node.title}</p>
            <div >
                <Img className={'rounded-lg'}fluid={node.images[0].fluid}/>
            </div>
            </Card>
            </Link>
   
    
 


  ))}
   
    

    </div>
    
)
}
    
