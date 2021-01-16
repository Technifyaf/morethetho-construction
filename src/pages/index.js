import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layouts/layout';
import Banner from 'sections/banner';
import Clients from 'sections/clients';
import FeaturedSpace from 'sections/featured-space';
import OurCustomer from 'sections/our-customer';
import Gallery from 'sections/gallery';
import Pricing from 'sections/pricing';
import Blog from 'sections/blog';
import Subscription from 'sections/subscription';
import AboutUS from 'sections/about-us';
import ContactUS from 'sections/contact-us';
import Quote from 'sections/quote';
import image from 'assets/images/gallery/flushing_2.jpeg'

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Morethetho Construction"
        titleSeparator={`-`}
        description={'Your preffered drilling partner for over 8 years' || 'nothin’'}
        image={image}
        pathname= "www.morethetho.co.ls"
       />
        <Banner />
     
        <FeaturedSpace />
        <AboutUS/>
        <Gallery />
       
        <OurCustomer />
        <Clients/>
     
       <ContactUS/>
      </Layout>
    </ThemeProvider>
  );
}
