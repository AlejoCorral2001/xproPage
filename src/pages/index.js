import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import Gmap from '../components/gMaps/gMaps'
import Img from 'gatsby-image'
import Insta from '../components/instagram/instagram'
import {useState, useEffect} from 'gatsby'
export default ({data}) => {
  setTimeout(()=>{console.log('hola')},5000)
  return(
    <Layout  type={'index'}>
    <section className="pt-20 md:pt-40">
  
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Comodidad y simpleza en una sola pieza
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Junto a la compra de cualquier router cnc estan incluidos videos de capacitacion para poder comenzar a explotar tus ideas en tan solo unas horas
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg" className='mx-4 text-lg'link={'/catalogue'}>Catálogo</Button>
            <Button size="lg"  className='mx-4 text-lg' link={'/examples'}>Ejemplos</Button>
          </p>
         
        <br/>
        </div>
        <div className="lg:w-1/2 ">
        <Insta width={35}/>
         
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">En X-PRO CNCs ofrecemos</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Mejores precios del mercado</p>
              <p className="mt-4">
                Actualmente estamos manejando los precios mas bajos dentro del mercado sin sacrificar la durabilidad y calidad de nuestros productos
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Calidad en todo sentido</p>
              <p className="mt-4">
                Utilizamos materiales de alta resistencia para asegurar la durabilidad y buen funcionamiento de nuestros equipos
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Lista para usar</p>
              <p className="mt-4">
                Recibi cualquiera de nuestros routers y comenza a trabajar en pocas horas 
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Diseña y planea los pasos para que tu emprendimiento crezca
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Hoy en dia poder utilizar un router cnc significa, en pocas palabras, tener la posibilidad de encontrar salidas laborales de forma rapida y sensilla. Los routers cnc son ideales para hacer trabajos repetitivos en los cuales se precisa una alta precision y exactitud en el resultado, disminuyendo los gastos de manufacturacòn y reflejando un aumento en las ganancias.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    
     
  
   
  </Layout>
   )
}
  





export const query = graphql`
  query {
    file (id: {eq: "8bb02c44-d6bd-574b-8a52-b4926ac57a80"}){
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`