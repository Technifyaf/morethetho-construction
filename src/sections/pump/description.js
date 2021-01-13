/** @jsx jsx */
import { jsx, Box, Container, Image, Flex, Link, Button } from 'theme-ui';
import { RiArrowRightSLine } from 'react-icons/ri';
import SectionHeading from 'components/section-heading';
import service from 'assets/images/features/2.jpg';
import { FaAngleRight } from 'react-icons/fa';

const Pump_description = () => {
  return (
    <Box as="section" sx={styles.section} id ="about-us">
      <Container>
        <Flex sx={styles.contentWrapper}>
          <Flex as="figure" sx={styles.illustration}>
            <Image loading="lazy" src={service} alt="service" />
          </Flex>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="Pumping Test"
              description="The test will be carried out to determine the borehole capacity and
              sustainability. The 12 hour pumping and recovery test would be
              carried out and provide a detailed report
              Water quality test analysis will be conducted to verify the quality
              of the underground water before consumption. The water sample is
              taken to WASA or other independent analysis.
              The quality of water is not responsibility of the driller hence the
              application of drilling permit from relevant authority "
            />
           
           <a
						href='https://forms.gle/a4zRnRWchcUZaEG88'
						ml={2}
						label='Get Technified'
						sx={styles.link}
						variant='buttons.primary'
					>
					 <Button sx={styles.joinNow}>Request quotation</Button>
					</a>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Pump_description;

const styles = {
  section: {
    pt: [60, 60, 60, 60, 80, 9],
    pb: [30, 30, 6],
  },
  contentWrapper: {
    display: ['flex'],
    alignItems: ['center'],
    flexDirection: [
      'column-reverse',
      'column-reverse',
      'column-reverse',
      'row',
    ],
  },
  illustration: {
    alignItems: ['flex-start'],
    maxWidth: ['none', 'none', 'none', 'none', 480, 530, 760],
    m: ['50px 0 0', '50px 0 0', '50px 0 0', 0, '0 20px 0 0', '0 48px 0 0'],
    img: {
        borderRadius: 5,
        transform: 'scale(1)',
        transition: 'all 0.3s ease-in-out 0s',
      },
  },
  rightContent: {
    m: [0, 0, 0, 0, '0px 48px 0px 0px', '0px 95px 0px 0px'],
  },
  heading: {
    textAlign: ['center', 'center', 'center', 'left'],
    marginLeft: 0,
    maxWidth: 580,
    m: ['0 auto 27px', '0 auto 27px', '0 auto 27px', '0 0 30px'],
    h2: {
      fontSize: [22, 22, 22, 28, 30, 36, 46],
      lineHeight: [1.6, 1.6, 1.6, 1.41],
      fontWeight: [500, 500, 500, 400],
    },
    p: {
      fontSize: ['15px', '15px', '15px', '17px'],
      mt: [3, 3, 3, 20, 5],
    },
  },
  link: {
    color: 'primary',
    textDecoration : 'none',
    fontSize: [1, null, 2],
    display: 'inline-block',
    verticalAlign: 'middle',
    fontWeight: 'bold',
    pl: ['30px', null, null, '4px', null, '4px'],
    mt: ['5px', null, null, null, '10px'],
    svg: {
      transition: 'margin-left 0.3s ease-in-out 0s',
    },
    ':hover': {
      svg: {
        ml: '5px',
      },
    },
  },
};
