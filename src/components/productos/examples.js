import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Card from '../Card';
import {Link} from 'gatsby'
import Style from './products.module.css'
export default ()=>{

    const data = useStaticQuery(graphql`
    query{allContentfulExamples {
        nodes {
         
            id
            title
            images {
              
                fluid(quality:50){
                    
                    ...GatsbyContentfulFluid
            }
            }
        }
      }
    }
    `)

const models = data.allContentfulExamples.nodes
let result=0;



return(
    <div className={"flex flex-col  md:flex-row md:flex-wrap sm:-mx-3 mt-12 justify-center"}>
  {models.map((node)=>(
    <Card className=" m-4 hover:shadow-xl hover:bg-gray-200 relative border-gray-200 border-solid border md:w-5/12">
              <p className="font-semibold text-xl text-center mb-4">{node.title}</p>
            <div >
                <Img className={'rounded-lg'}fluid={node.images[0].fluid}/>
            </div>
    </Card>
  ))}
          

    </div>
    
)
}