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
import Product from '../components/productos/products'
export default () => (
  <Layout  type={'catalogue'}>
    <div className="mx-auto px-2 md:mx-10 lg:mx-24">
    <div className="pt-20">
    <p className='text-center text-primary text-3xl font-semibold'>ROUTERS</p>
    
      <Product/>
 
    </div>
    </div>
  </Layout>
);
