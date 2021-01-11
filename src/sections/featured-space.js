/** @jsx jsx */
import { rgba } from 'polished';
import { useState, useRef, useEffect } from 'react';
import { jsx, Box, Container, Heading, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Progressbar from 'components/progressbar';
import Feature from 'components/cards/feature';
import Image from 'components/image';
import drilling from 'assets/images/gallery/morethetho_gallery_1.jpg';
import survey from 'assets/images/gallery/morethetho_gallery_6.jpg';
import casing from 'assets/images/gallery/casing_2.jpg';
import flashing from 'assets/images/gallery/flushing.jpg';
import testing from 'assets/images/gallery/casing.jpg'
import water from 'assets/images/gallery/water_pump.jpg';
import slider1 from 'assets/images/features/1.jpg';
import slider2 from 'assets/images/features/2.jpg';
import slider3 from 'assets/images/features/3.jpg';



import SwiperCore, { Autoplay, Pagination, EffectFade } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Autoplay, Pagination, EffectFade]);

const data = {
  feature: [
    {
      id: 1,
      icon: survey,
      title: 'Surveying',
      description: 'Drilling and flashing.',
      path : '/services/surveying'
    },
    {
      id: 1,
      icon: drilling,
      title: 'Drilling',
      description: 'Drilling and flashing.',
      path : '/services/drilling'

    },
    {
      id: 2,
      icon: flashing,
      title: 'Flushing',
      description: 'Surveying, casing, and yield casing',
      path : '/services/flushing'

    },
    {
      id: 3,
      icon: casing,
      title: ' Casing',
      description: 'Installation and maintenance',
      path : '/services/casing'

    },
    {
      id: 4,
      icon: testing,
      title: 'Yield testing',
      description: 'Installation and maintenance',
      path : '/services/yielding'

    },
    {
      id: 5,
      icon: water,
      title: 'Water pump',
      description: 'Installation and maintenance',
      path : '/services/pump'

    },
  ],
  gallery: [
    {
      id: 1,
      image: slider1,
      title: 'Drilling ',
      desc: 'Borehole and blast drilling',
    },
    {
      id: 2,
      image: slider2,
      title: 'Surveying and casing',
      desc: 'Borehole and yield casing',
    },
    {
      id: 3,
      image: slider3,
      title: 'Water pump ',
      desc: 'Installation and maintenance',
    },
  ],
};

const FeaturedSpace = () => {
  const isPause = useRef(false);
  const swiperRef = useRef(null);
  const [togglePlay, setTogglePlay] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(0);

  let time = 3;
  let tick, percentTime;

  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    tick = setInterval(interval, 10);
  }

  function interval() {
    if (isPause.current === false) {
      percentTime += 1 / (time + 0.1);
      setCurrentWidth(percentTime);
      if (percentTime >= 100) {
        swiperRef?.current?.swiper?.slideNext();
        startProgressbar();
      }
    }
  }

  function resetProgressbar() {
    setCurrentWidth(0);
    clearTimeout(tick);
  }

  useEffect(() => {
    startProgressbar();
  }, []);

  const handleToggle = () => {
    isPause.current = !isPause.current;
    setTogglePlay((prev) => !prev);
  };

  return (
    <Box id="feature" as="section" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box >
            <SectionHeading
              sx={styles.heading}
              title="Our services"
              description="Our primary services are drilling services we have state of the art drilling equipment, thouroughly trained personnel and expert geologists."
            />
            <Box sx={styles.featureWrapper}>
              {data?.feature?.map((feature) => (
                <Feature key={feature.id} data={feature} />
              ))}
           
            </Box>
          </Box>
         
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedSpace;

const styles = {
  section: {
    pt: [30, null, null, null, 60],
    pb: [30, null, null, 50, 60],
  },
  contentWrapper: {
    gap: [null, null, null, null, '30px'],
    display: ['flex', null, null, null, 'grid'],
    alignItems: 'center',
    flexDirection: ['column', null, null, null, null],
    gridTemplateColumns: ['unset', null, null, null, 'repeat1,fr)'],
  },
  leftContent: {
    m: [0, '30px 0px 0', '30px 50px 0', 0],
  },
  heading: {
    textAlign: ['center', null, null, null, 'left'],
    maxWidth: 490,
    margin: ['0 auto 40px', null, null, null, '0 0 80px'],
    h2: {
      fontSize: [22, null, null, 30, null, 36, 46],
      lineHeight: [1.6, null, null, 1.41],
      fontWeight: [500, null, null, 400],
    },
    p: {
      fontSize: ['15px', null, null, '17px'],
      mt: [3, null, null, 5],
    },
  },
  featureWrapper: {
    gap: ['40px 20px', null, null, null, '30px'],
    display: 'grid',
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      null,
      'repeat(3,180px)',
      'repeat(3,1fr)',
    ],
    justifyContent: ['unset', null, null, 'center', 'flex-start'],
  },
  rightContent: {
    position: 'relative',
    mt: [6, null, null, null, 0],
    maxWidth: '100%',
    '.swiper-pagination-bullets': {
      bottom: 20,
    },
    '.swiper-pagination-bullet': {
      backgroundColor: 'rgba(255,255,255,0.5)',
      width: 10,
      height: 10,
      opacity: 1,
      mx: 5,
      ':focus': {
        outline: 0,
      },
    },
    '.swiper-pagination-bullet-active': {
      backgroundColor: 'rgba(255,255,255,1)',
    },
  },
  progressbar: {
    position: 'absolute',
    left: [15, 25],
    top: [46, 53],
    zIndex: 2,
  },
  progressBar: {
    position: 'relative',
    mr: 4,
  },
  toggleButton: {
    backgroundColor: 'transparent',
    border: 0,
    cursor: 'pointer',
    display: 'flex',
    padding: 0,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    '&:focus': {
      outline: '0 none',
    },
  },
  image: {

    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
    '> img': {
      borderRadius: 10,
    },
    figcaption: {
      backgroundColor: 'primary',
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      left: 0,
      top: 30,
      borderRadius: 5,
      color: '#fff',
      padding: ['20px 20px 20px 80px', '25px 25px 25px 90px'],
      h4: {
        lineHeight: 1,
        fontWeight: 'bold',
        fontSize: [14, 18],
        letterSpacing: 'heading',
      },
      p: {
        fontSize: [13, 16],
        fontWeight: 500,
        letterSpacing: 'heading',
        color: rgba('#fff', 0.6),
        marginTop: [2],
      },
    },
   
  },
};
