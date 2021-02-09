import { useEffect } from 'react';
import Router from 'next/router';
import 'swiper/swiper-bundle.min.css';
import 'assets/css/slick.min.css';
import { initGA, logPageView } from 'analytics';
import 'typeface-dm-sans';
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-WFJ8FC5D'
}


export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return <Component {...pageProps} />;
}
