/** @jsx jsx */
import { jsx, Box, Button, Container, Image, Text } from 'theme-ui';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Slider from 'react-slick';
import SectionHeading from 'components/section-heading';
import mgc from 'assets/images/clients/mgc.png';
import puma from 'assets/images/clients/puma.png';
import total from 'assets/images/clients/total.png';
import dribbble from 'assets/images/clients/dribbble.png';
import { textInputs } from 'polished';
const clients = [
	{
		id: 1,
		name: 'Maseru',
		logo: mgc,
	},
	{
		id: 2,
		name: 'Berea',
		logo: puma,
	},
	{
		id: 3,
		name: 'Thaba Tseka',
		logo: total,
	},
];

function SlickArrow({ className, onClick, control }) {
	return (
		<Button
			variant='text'
			className={className}
			sx={styles.paginationButton}
			onClick={onClick}
		>
			{control === 'prev' ? (
				<BsArrowLeft size='32px' />
			) : (
				<BsArrowRight size='32px' />
			)}
		</Button>
	);
}

const Clients = () => {
	const settings = {
		slidesToShow: 5,
		slidesToScroll: 1,
		speed: 500,
		nextArrow: <SlickArrow control='next' />,
		prevArrow: <SlickArrow control='prev' />,
		responsive: [
			{
				breakpoint: 100000,
				settings: 'unslick',
			},
			{
				breakpoint: 1024,
				settings: {
					infinite: false,
					slidesToShow: 4,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					infinite: false,
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 640,
				settings: {
					infinite: false,
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<Box id='clients' as='section' sx={styles.section}>
			<Container>
				<SectionHeading
					slogan='Meet some of our high profile clients. '
					title='Projects'
				/>
				<Slider sx={styles.clients} {...settings}>
					{clients?.map((client) => (
						<Box key={client.id} as='figure' sx={styles.logo}>
							<Image src={client.logo} width='150' alt='startup landing logo' />
						</Box>
					))}
				</Slider>
			</Container>
			<Box sx={{ textAlign: ['center', 'center', 'center', 'center'] }}>
				<a
					href='/portfolio'
					ml={2}
					label='Get Technified'
					variant='buttons.primary'
				>
					<Button sx={styles.link}>View portfolio</Button>
				</a>
			</Box>
		</Box>
	);
};

export default Clients;

const styles = {
	section: {
		pt: [50, 50, 50, 70, 60, 80],
		pb: [30, 40, 50, 60, 50, 80],
	},
	clients: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		pt: [0, 0, 25, 25, 25, 6],
		'&.slick-slider': {
			marginBottom: '40px',
		},
		'.slick-track': {
			display: 'flex',
			alignItems: 'center',
		},
	},
	logo: {
		display: 'flex !important',
		justifyContent: 'center',
		mx: '10px',
		':focus': {
			outline: 'none',
		},
	},
	pagination: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		
		
	},
	paginationButton: {
		minHeight: '30px',
		padding: 30,
		position: 'absolute',
		bottom: '-60px',
		':focus': {
			outline: '0 none',
		},
		svg: {
			transition: 'all 0.2s ease-in-out 0s',
		},
		'&.slick-disabled': {
			color: '#BBC7D7',
			svg: {
				transform: 'scale(0.8)',
			},
		},
		'&.slick-prev': {
			left: 'calc(50% - 16px)',
			transform: 'translateX(-50%)',
		},
		'&.slick-next': {
			transform: 'translateX(50%)',
			right: 'calc(50% - 16px)',
		},
  },
  
 
	link: {
		textDecoration: 'none',
		fontSize: [1, null, 2],
		display: 'inline-block',
		verticalAlign: 'middle',
		fontWeight: 'bold',
		pl: ['30px', null, null, 'px', null, '30px'],
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
