/** @jsx jsx */
import { jsx, Box, Container, Image, Flex, Link, Text } from 'theme-ui';
import { RiArrowRightSLine } from 'react-icons/ri';
import SectionHeading from 'components/section-heading';
import customer from 'assets/images/features/1.jpg';

const ContactUS = () => {
  return (
    <Box as="section" sx={styles.section} id="contact" >
      <Container>
        <Flex sx={styles.contentWrapper}>
          <Flex as="figure" sx={styles.illustration}>
            <Image loading="lazy" src={customer} alt="customer" width="500" />
          </Flex>
          <Box sx={{ textAlign: ['center', 'center', 'center', 'left'] }}>
            <SectionHeading
              sx={styles.heading}
              title="Contact us."
              description="Contact us by for phone or email or visit us at the adress below"
            />
            <Box sx={{ textAlign: ['center', 'center', 'center', 'left'] }}>
            <Text as="p" sx={styles.desc}>
           <ul> Phone :  (+266) 53094658 </ul>
           <ul>Adress : Ha Foso, </ul>
           <ul>Email : sales@morethetho.co.ls</ul>
            </Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default ContactUS;

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
