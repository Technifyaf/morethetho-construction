import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layouts/layout';
import Banner from 'sections/banner';
import Surveying_body from 'sections/surveying/description';
import Surveying_layout from 'components/layouts/surveying_layout';
import Surveying_desription from 'sections/surveying/description';
export default function myService() {
    return (
      <ThemeProvider theme={theme}>
        <Surveying_layout>
          <SEO title="Morethetho Construction | surveying" />
          <Surveying_desription/>
        
        </Surveying_layout>
      </ThemeProvider>
    );
  }