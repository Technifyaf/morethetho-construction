/** @jsx jsx */
import { jsx, Box, Container, Image, Button } from 'theme-ui';
import { RiArrowRightSLine } from 'react-icons/ri';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import GalleryCard from 'components/cards/gallery-card';

import gallery1 from 'assets/images/gallery/well.jpg';
import gallery2 from 'assets/images/gallery/capentry.jpg';
import gallery3 from 'assets/images/gallery/beast.jpg';
import gallery4 from 'assets/images/gallery/under-construction.jpg';
import gallery5 from 'assets/images/gallery/welding.jpg';
import gallery6 from 'assets/images/gallery/pump.jpg';

const data = [
  {
    id: 1,
    image: gallery1,
    title: 'Maseru Pumps',
  },
  {
    id: 2,
    image: gallery2,
    title: 'Mohale fresh produce',
  },
  {
    id: 3,
    image: gallery3,
    title: 'NIVIST Civils and projects',
  },
  {
    id: 4,
    image: gallery4,
    title: 'Green Paradise',
  },
  {
    id: 6,
    image: gallery6,
    title: 'Berea Primary',
  },
  {
    id: 5,
    image: gallery5,
    title: 'Qing Jian group',
  },
];

const masonryOptions = {
  transitionDuration: 0,
};

const Gallery = () => {
  return (
    <Box id="gallery" as="section" sx={styles.section}>
      <Container sx={styles.container}>
        <SectionHeading
          sx={styles.heading}
          slogan="Completed projects"
          title="Take a look at some of our completed projects"
        />
        <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
          {data?.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </Box>
      
      </Container>
    </Box>
  );
};

export default Gallery;

const styles = {
  section: {
    pt: [30, 30, 40, 50, 60],
    pb: [60, 60, 60, 90, 80, 120],
  },
  heading: {
    mb: [30, 30, 40, 60],
  },
  galleryWrapper: {
    mx: '-15px',
  },
  button: {
    minHeight: [50, 50, 50, 60],
    fontSize: [14, 14, 16],
    width: '100%',
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
