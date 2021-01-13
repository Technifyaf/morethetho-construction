/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button, Input } from 'theme-ui';
import { rgba } from 'polished';

import Select from 'components/select';
import bannerBg from 'assets/images/morethetho_banner.jpg';
import mapMarker from 'assets/images/icons/map-marker.png';


const options = [
  {
    id: 1,
    label: 'Brooklyn, New york',
    value: 'Brooklyn, New york',
  },
  {
    id: 2,
    label: 'Atlanta, Georgia',
    value: 'Atlanta, Georgia',
  },
  {
    id: 3,
    label: 'Minneapolis, Minnesota',
    value: 'Minneapolis, Minnesota',
  },
  {
    id: 4,
    label: 'Chicago, Illinois',
    value: 'Chicago, Illinois',
  },
];

export default function Banner() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitting...');
  };

  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.bannerContent}>
            <Heading as="h" sx={styles.heroTitle}>
            Over 5 years of borehole drilling excellence
            </Heading>
            <Text as="p" sx={styles.desc}>
            We have installed more than 30+ wells and 50 boreholes in Maseru, Mohale'shoek, Maputsoe, Thaba Tseka, Quthing, Mokholtong and Leribe. 
            </Text>
         
              <a
						href='https://forms.gle/a4zRnRWchcUZaEG88'
						ml={2}
						sx={styles.button}
						variant='buttons.primary'
					>
					 <Button sx={styles.button}>Request quotation</Button>
					</a>
      
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  section: {
    background: `url(${bannerBg}) no-repeat center top / cover`,
    backgroundSize: ['100%', null, null, null, 'cover'],
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    minHeight: [null, null, null, null, '50vh', '100vh'],
  },
  bannerContent: {
    backgroundColor: rgba('#404040', 1),
    boxShadow: [
      '0px 10px 16px rgba(52, 61, 72, 0.12)',
      null,
      null,
      null,
      'none',
    ],
    maxWidth: [null, null, null, 600, 500, null, 650],
    padding: [
      '20px',
      '30px',
      null,
      null,
      null,
      '30px 50px 60px',
      '50px 60px 90px',
    ],
    borderRadius: 5,
    m: ['110px 0 0', null, null, '110px auto 0', '60px 0 0', null, 0],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      maxWidth: 515,
      mt: 70,
      padding: '30px 50px 65px',
    },
  },
  heroTitle: {
    fontSize: [22, 28, 28, 40, , 5, 6],
    color : '#fff',
    fontWeight: 700,
    letterSpacing: 'heading',
    lineHeight: [1.4, null, null, null, null, null, 1.57],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      fontSize: 40,
    },
  },
  desc: {
    color : '#fff',
    fontSize: [15, 16, 15, 17],
    lineHeight: [1.53, 1.53, 1.53, 2, 2.4, 2, 2.48],
    maxWidth: 440,
    marginTop: [15, 15, 15, null, null, null, 30],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      mt: 15,
    },
  },
  input: {
    backgroundColor: rgba('#fff', 0.08),
    borderRadius: '5px',
    borderColor: '#020718',
    color: rgba('#fff', 0.8),
    flexGrow: 1,
    fontFamily: 'body',
    height: 'auto',
    px: '30px',
    py: '0',
    minHeight: [50, 50, 60],
    width: ['100%', 'auto'],
    '::placeholder': {
      color: rgba('#fff', 0.8),
    },
  },
  
  button: {
    fontSize: 20,
    textDecoration : 'none',
    fontWeight: 700,
    marginTop: 20,
    width: '100%',
    minHeight: [50, null, null, null, 60],
    fontSize: [16, 16, 16, 20],
    ':focus': {
      outline: '0 none',
    },
  },
};
