/** @jsx jsx */
import { jsx, Box, Container, Image, Flex, Link, Button } from 'theme-ui';
import { RiArrowRightSLine } from 'react-icons/ri';
import SectionHeading from 'components/section-heading';
import service from 'assets/images/features/2.jpg';
import { FaAngleRight } from 'react-icons/fa';

const Portfolio = () => {
	return (
		<Box as='section' sx={styles.section} id='about-us'>
			<Container>
				<Flex sx={styles.contentWrapper}>
					<Flex as='figure' sx={styles.illustration}>
						<Image loading='lazy' src={service} alt='service' />
					</Flex>
					<Box sx={styles.rightContent}>
						<SectionHeading
							sx={styles.heading}
							title='Portfolio'
							description='Your preferred drilling partner over past 8 years'
						/>

						<ul>
							<li> Mkhulu Electro Distribution Project</li>
							<li> Tuwana Construction </li>
							<li> Mdlogovana Tyres</li>
							<li> Maseru Pumps and Plastics </li>
							<li> NIVSET Civils and Projects</li>
							<li> Qing Jian Constructions </li>
							<li> Mango Tree Construction </li>
							<li> S.O.S</li>
							<li> Quantum Quantity Surveyors </li>
							<li> Hemp Africa</li>
							<li> UNIK Construction </li>
							<li> NB JV SH Poli-hali Camp</li>
							<li> Restol Mines</li>
							<li> Total Gas Depot</li>
							<li> Puma Garage</li>
							<li> HS Construction </li>
							<li> Mathoka Construction </li>
							<li> VDC</li>
							<li> MGC</li>
							<li> Maputsoe District Council </li>
							<li> Lesotho Electricity Company</li>
							<li> Maluti Mountain Brewery </li>
							<li> Senqu Hotel </li>
						</ul>
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

export default Portfolio;

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
