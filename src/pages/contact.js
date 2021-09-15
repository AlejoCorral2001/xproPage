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
import Icons from '../components/socialIcons/socialIcons';
import InstagramIframe from '../components/instagram/instagramIframe';
import Seo from '../components/Seo';

export default () => (
  <Layout type={'contact'}>
    <Seo title="Contacto" />
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <Icons size={'auto'} />
      </div>
      <div className="mx-auto mt-20">
        <p className="text-center text-primary-darker text-3xl md:text-4xl  font-sans font-medium">
          nueva cuenta de instagram!
        </p>
        <InstagramIframe />
      </div>
    </section>
  </Layout>
);
