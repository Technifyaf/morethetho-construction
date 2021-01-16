/** @jsx jsx */
import { jsx, Box, Container, Image, Flex, Link, Button } from 'theme-ui';
import { RiArrowRightSLine } from 'react-icons/ri';
import SectionHeading from 'components/section-heading';
import customer from 'assets/images/gallery/morethetho_gallery_3.jpg';
import { FaAngleRight } from 'react-icons/fa';

const AboutUS_Full = () => {
	return (
		<Box as='section' sx={styles.section} id='about-us'>
			<Container>
				<Flex sx={styles.contentWrapper}>
					<Flex as='figure' sx={styles.illustration}>
						<Image loading='lazy' src={customer} alt='customer' />
					</Flex>
					<Box sx={styles.rightContent}>
						<SectionHeading
							sx={styles.heading}
							title='About us'
							description='Morethetho Construction was established in 2009 as a general construction
              company in Lesotho. We diversified our business focus to underground Drilling in
              2014 and therefore registered as a drilling contractor accredited by the
              Department of Water Affairs in Lesotho. 
              
              Morethetho Construction is situated at
              Ha Foso-Marabeng on the along the Main North 1 road to TY
              We have over 6 years’ experience in underground water drilling and related
              services in Lesotho and our services are offered to residential, commercial,
              agricultural, mining industry, construction and water supply projects for rural
              communities. 

              We offer a complete underground solution from borehole survey, drilling, casing,
              pumping/ yield test, quality test, storage tanks and stand installation.
              Our fleet of drilling rigs helps us to deliver timeous quality services to our
              diversified customers. 

              During the past 6 years our company has had the opportunity to drill throughout
              the country in different district of Lesotho and therefore have a vast knowledge of
              the varying underground formations in different areas. '
						/>

						<Box
							sx={{ textAlign: ['center', 'center', 'center', 'left'] }}
						></Box>
						<Box sx={{ textAlign: ['center', 'center', 'center', 'left'] }}>
							<a
								href='https://forms.gle/a4zRnRWchcUZaEG88'
								ml={1}
								label='Get Technified'
								sx={styles.link}
								variant='buttons.primary'
							>
								<Button sx={styles.joinNow}>Request quotation</Button>
							</a>
						</Box>
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};

export default AboutUS_Full;

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
			transform: 'scale(0.9)',
			transition: 'all 0.3s ease-in-out 0s',
		},
	},
	rightContent: {
		m: [0, 0, 0, 0, '0px 48px 0px 0px', '0px 95px 0px 0px'],
	},
	heading: {
    
		textAlign: ['justify', 'center', 'center', 'left'],
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
		textDecoration: 'none',
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
