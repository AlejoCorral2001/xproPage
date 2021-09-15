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
import Gmap from '../components/gMaps/gMaps';
import Img from 'gatsby-image';
import Insta from '../components/instagram/instagram';
import Seo from '../components/Seo';
export default ({ data }) => (
  <Layout type={'info'}>
    <Seo title="Nosotros" />
    <div className="container mx-auto px-8 m-10">
      <p className={'text-center mb-10 text-2xl font-semibold m-5'}>
        En XPRO CNCs buscamos llevar una solución eficaz y duradera a los talleres de una gran
        amplia gama de emprendedores. Nuestra area de diseño, realiza de forma positiva la busqueda
        del equilibrio entre todos los componentes que deciden implementar para la fabricación de
        cualquiera de nuestros Routers CNC. Logrando así, una muy buena relación calidad-precio. Las
        areas de fabricación y ensamble son las encargadas de materializar todo ese trabajo
        invertido por parte de los diseñadores y finalizar obteniendo un producto bien terminado y
        perfectamente funcional.{' '}
      </p>
      <div className={'text-center m-10'}>
        <p className={'text-4xl font-medium'}>Misión:</p>
        <br />
        <p className={'text-2xl'}>
          Nuestra misión es poder brindar una herramienta capaz de ser utilizada sin mucho
          conocimiento, ni inversión de tiempo. Buscamos brindar al usuario una solución al gran
          problema que puede significar la materialización de ideas.
        </p>
      </div>
      <div className={'text-center m-10'}>
        <p className={'text-4xl font-medium'}>Objetivo:</p>
        <br />
        <p className={'text-2xl'}>
          Nuestro objetivo es poder ofrecer una gran gama de diferentes modelos de Routers Cncs para
          así poder abastecer a todo tipo de cliente con sus respectivos intereses.
        </p>
      </div>
      <div className={'text-center m-10'}>
        <p className={'text-4xl font-serif font-medium '}>
          Si nuestros clientes crecen, nosotros crecemos con ellos...
        </p>
      </div>

      <SplitSection
        reverseOrder
        primarySlot={
          <div>
            <h3 className="text-3xl font-semibold leading-tight">
              diseña y planea los pasos para que tu emprendimiento crezca
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              hoy en dia poder utilizar un router cnc significa, en pocas palabras, tener la
              posibilidad de encontrar salidas laborales de forma rapida y sensilla. Los routers cnc
              son ideales para hacer trabajos repetitivos en los cuales se precisa una alta
              precision y exactitud en el resultado, disminuyendo los gastos de manufacturacòn y
              reflejando un aumento en las ganancias.
            </p>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
    </div>
  </Layout>
);

export const query = graphql`
  query {
    file(id: { eq: "8bb02c44-d6bd-574b-8a52-b4926ac57a80" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

