/** @jsx jsx */
import { jsx, Box, Container, Image, Button } from 'theme-ui';
import { RiArrowRightSLine } from 'react-icons/ri';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import GalleryCard from 'components/cards/gallery-card';

import gallery1 from 'assets/images/gallery/morethetho_gallery_1.jpg';
import gallery2 from 'assets/images/gallery/morethetho_gallery.jpg';
import gallery3 from 'assets/images/gallery/morethetho_gallery_2.jpg';
import gallery4 from 'assets/images/gallery/morethetho_gallery_3.jpg';
import gallery5 from 'assets/images/gallery/morethetho_slider_2.jpg';
import gallery6 from 'assets/images/gallery/morethetho_gallery_6.jpg';

const data = [
  {
    id: 1,
    image: gallery1,
    title: '',
  },
  {
    id: 2,
    image: gallery2,
    title: '',
  },
  {
    id: 3,
    image: gallery3,
    title: '',
  },
  {
    id: 4,
    image: gallery4,
    title: '',
  },
  {
    id: 6,
    image: gallery6,
    title: '',
  },
  {
    id: 5,
    image: gallery5,
    title: '',
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
          slogan="Gallery"
          title="Take a look at our gallery"
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
