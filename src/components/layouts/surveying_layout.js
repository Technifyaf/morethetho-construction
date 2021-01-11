/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Header from '../header/surveying_header';
import Footer from '../footer';
export default function Surveying_layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <main
        sx={{
          variant: 'layout.main',
        }}
      >
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
}
