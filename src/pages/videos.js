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
import Examples from '../components/productos/examples'
export default () => (

  <Layout  type={'videos'}>
    <div className="mx-auto px-4 md:mx-24">
    <section className="pt-20">
    <div className="mx-auto" style={{width:"75%",height:"75vh"}}>
    <iframe className='rounded-lg' style={{width:"100%",height:"100%"}} src="https://www.youtube.com/embed/jOJkZgz5i9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
    </div>
    </section>
    </div>
  </Layout>
);
