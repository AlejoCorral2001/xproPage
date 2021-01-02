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
import Map from '../components/gMaps/gMaps'
export default () => (
  <Layout type={'location'}>
    <section className="max-w-full">
    <br/>
     <Map/>
     <br/>
     <p className='text-center font-sans'>Estamos ubicados en la zona de quintas de Arguello, Córdoba Capital, Argentina</p>
    </section>
  
  </Layout>
);
