/** @jsx jsx */
import { rgba } from 'polished';
import Image from 'components/image';
import { jsx, Box, Heading, Text } from 'theme-ui';
import { Link } from 'components/link';
import { FaAngleRight } from 'react-icons/fa';

const Feature = ({ data: feature }) => {
  return (
    <Box key={feature.id} sx={styles.featureItem}>
      <Image loading="lazy" src={feature.icon} alt={feature.title} />
      <Heading as="h3">{feature.title}</Heading>
      <Text as="p">{feature.description}</Text>
      <a
						href='https://forms.gle/a4zRnRWchcUZaEG88'
						ml={2}
						label='Get Technified'
						sx={styles.link}
						variant='buttons.primary'
					>
			Learn more <FaAngleRight/>
					</a>
          
    </Box>
  );
};

export default Feature;

const styles = {
  featureItem: {
    textAlign: ['center', null, null, null, 'left'],
    h3: {
      lineHeight: 2.5,
      fontWeight: 500,
      letterSpacing: 'heading',
      fontSize: [18, null, null, null, null, 20],
    },
    p: {
      color: rgba('#343D48', 0.75),
      fontSize: [null, null, null, null, 14, 15],
      lineHeight: 1.47,
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
      position: 'relative',
      top: '3px',
    },
  },
};
