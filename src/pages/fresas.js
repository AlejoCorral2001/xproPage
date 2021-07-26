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
import Fresas from '../components/productos/fresas'
export default () => (
  <Layout  type={'fresas'}>
    <div className="container mx-auto px-8 ">
    <section className="pt-20 md:pt-40">
    <p className='text-center text-primary text-3xl font-semibold mb-10'>FRESAS</p>
      <div className="flex-1 px-3">
         <Fresas/>
        
      </div>
      
    
       
      
    </section>
    </div>
  </Layout>
);
