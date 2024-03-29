import React from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout/Layout'
import Carousel from '../components/instagram/instagram'
import Card from '../components/Card'
import Specification from '../components/Specification'
export default function cnc ({data}){
  
    const machine = data.allContentfulCncMachine.edges[0].node
    const comprar = () => {
      let msg="Hola me comunico desde la página www.xprocncs.com, estoy interesado en el modelo: "+machine.title
      msg="https://api.whatsapp.com/send/?phone=5493517889350&text="+msg
      window.open(msg ,"_top")
    }
    return(
        <Layout>
          <section className="pt-16 md:pt-32" >
            <div className="container mx-auto px-8 lg:flex flex-col">
              <div className="text-center text-3xl lg:text-4xl xl:text-5xl font-bold leading-none mb-4 lg:mb-8">{machine.title}
              </div>
              <br/>
              <Carousel width_lg={65} width_md={70} width_sm={75} src={machine.images}/>
              <br/>
              <br/>
              <div className={'bg-blue-200 p-4 rounded-lg'}><p className={'font-serif'}>{machine.description.description}</p></div>
              <br/>
              <Specification obj={machine.features}/>
              <br/>
              <p className={'bg-blue-200 p-5 rounded-lg animate-pulse'}>✴Junto a la compra del router se entregan una serie de videos para poder empezar a usarla en tan solo 90 minutos. En ellos se explica como generar el código que reciben las máquinas como también la forma de enviárselo.</p>
              <br/>
              <p className={'bg-blue-300 p-5 rounded-lg text-xl text-center'}>{machine.price}</p>
              <br/>
              <p className={machine.stock?'text-center font-medium text-xl bg-green-400 p-3 rounded-lg':'text-center font-medium text-xl bg-red-400 p-3 rounded-lg'}>{machine.stock?'Este producto se encuentra en stock':'Este producto no se encuentra en stock'}</p>
              
              <p onClick={comprar} className={'mx-auto relative mt-8 text-center text-2xl lg:text-3xl  bg-primary-lighter text-white font-semibold   rounded-lg shadow-md'} style={{width:"fit-content"}}>
              <div className='mx-6 my-2'>Comprar</div>
              <div className="absolute right-0 h-4 top-0 w-full bg-primary-darker animate-ping rounded-md min-h-full opacity-75"></div>
              </p>
              <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
                <div className="flex-1 px-3">
                  <Card className="mb-8">
                    <p className="font-semibold text-xl">Quedate Tranquilo, te ayudamos</p>
                    <p className="mt-4">
                    Con la compra de cualquiera de nuestro Routers se adjuntan una serie de videos tutoriales para aprender a utilizarlos desde 0.
                    </p>
                  </Card>
                </div>
                <div className="flex-1 px-3">
                  <Card className="mb-8">
                    <p className="font-semibold text-xl">Calidad en todo sentido</p>
                    <p className="mt-4">
                      Utilizamos materiales de alta resistencia para asegurar la durabilidad y buen funcionamiento de nuestros equipos.
                    </p>
                  </Card>
                </div>
                <div className="flex-1 px-3">
                  <Card className="mb-8">
                    <p className="font-semibold text-xl">Lista para usar</p>
                    <p className="mt-4">
                      Recibí cualquiera de nuestros routers y comenzá a trabajar en pocas horas.
                    </p>
                  </Card>
                </div>
              </div>
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
                stock
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
                  Ejes
                  Desplazamiento
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