import react from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout/Layout'
import Carousel from '../components/instagram/instagram'
import Card from '../components/Card'
import Specification from '../components/Specification'
export default function cnc ({data}){

    const machine = data.allContentfulCncMachine.edges[0].node
    return(
        <Layout>
        
        <section className="pt-20 md:pt-40 " >
        <div className="container mx-auto px-8 lg:flex flex-col">
     
               <div className="text-center text-3xl lg:text-5xl xl:text-6xl font-bold leading-none">{machine.title}</div>
        <br/>
    
        <Carousel width={55} src={machine.images}/>
      
     
        <br/>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Quedate Tranquilo, te ayudamos</p>
              <p className="mt-4">
               Con la compra de cualquiera de nuestro Routers se adjuntan una serie de videos tutoriales para aprender a utilizarlos desde 0
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">calidad en todo sentido</p>
              <p className="mt-4">
                utilizamos materiales de alta resistencia para asegurar la durabilidad y buen funcionamiento de nuestros equipos
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">lista para usar</p>
              <p className="mt-4">
                recibi cualquiera de nuestros routers y comenza a trabajar en pocas horas 
              </p>
            </Card>
          </div>
        </div>
        <br/>
        <Specification obj={machine.features}/>
        <br/>
        
       
       
        </div>
        </section>
        </Layout>
     
    )
}


export const query = graphql`
query($title: String!){
    allContentfulCncMachine(filter: {title: {eq: $title}}){
        edges {
            node{
                title
                price
            
                description {
                  description
                }
                features {
                  Area_De_Trabajo
                  Largo_Ejes
                  Materiales_Mecanizables
                  Motorizacion
                  Husillo
                  Transmicion
                  Velocidad
                  Sistema
                  Alimentacion
                  Extras
                }
                
                images {
                    resize {
                        aspectRatio
                      }
                        fluid(quality:100){
                            
                            ...GatsbyContentfulFluid
                    }
                   
                }
            }
       
        }
      }
}
`