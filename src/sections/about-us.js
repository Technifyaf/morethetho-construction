/** @jsx jsx */
import { jsx, Box, Container, Image, Flex, Link } from 'theme-ui';
import { RiArrowRightSLine } from 'react-icons/ri';
import SectionHeading from 'components/section-heading';
import customer from 'assets/images/customer.png';
import { FaAngleRight } from 'react-icons/fa';

const AboutUS = () => {
  return (
    <Box as="section" sx={styles.section} id ="about-us">
      <Container>
        <Flex sx={styles.contentWrapper}>
          <Flex as="figure" sx={styles.illustration}>
            <Image loading="lazy" src={customer} alt="customer" />
          </Flex>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="About us"
              description="Morethetho Construction was established in 2009 as a general construction
              company in Lesotho. We diversified our business focus to underground Drilling in
              2014 and therefore registered as a drilling contractor accredited by the
              Department of Water Affairs in Lesotho. "
            />
           
            <Box sx={{ textAlign: ['center', 'center', 'center', 'left'] }}>
            <Link path ="#" sx={styles.link}>Learn more <FaAngleRight /></Link>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default AboutUS;

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
