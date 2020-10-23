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

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Comodidad y simpleza en una sola pieza
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            junto a la compra de cualquier router cnc estan incluidos videos de capacitacion para poder comenzar a explotar tus ideas en tan solo unas horas
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Catálogo</Button>
          </p>
      
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
  
  </Layout>
);
