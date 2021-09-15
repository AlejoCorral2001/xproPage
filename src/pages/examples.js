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
import Examples from '../components/productos/examples';
import Seo from '../components/Seo';
export default () => (
  <Layout type={'examples'}>
    <Seo title="Ejemplos" />
    <div className="mx-auto px-4 md:mx-24">
      <section className="pt-20">
        <Examples />
      </section>
    </div>
  </Layout>
);
