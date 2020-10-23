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
import Icons from '../components/socialIcons/socialIcons'
export default () => (
  <Layout  type={'contact'}>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <Icons size={"auto"} />
      </div>
    </section>
 
  </Layout>
);
