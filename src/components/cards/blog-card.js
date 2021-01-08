/** @jsx jsx */
import { jsx, Box, Flex, Image, Heading, Text } from 'theme-ui';
import { Link } from 'components/link';
import { rgba } from 'polished';
import chat from 'assets/images/icons/chat.png';
import { FaAngleRight } from 'react-icons/fa';

const BlogPost = ({ post }) => {
  return (
    <Box sx={styles.post}>
      <Flex as="figure" sx={styles.postImage}>
        <Image loading="lazy" src={post?.thumb} alt={post?.title} />
      </Flex>
      <Box sx={styles.meta}>
        <Heading as="h4">
          <a href={post.link}>{post?.title}</a>
        </Heading>
        <a
						href={post.link}
						ml={2}
						label='Get Technified'
						sx={styles.link}
						variant='buttons.primary'
					>
			Read more <FaAngleRight/>
					</a>
        
      </Box>
    </Box>
  );
};

export default BlogPost;

const styles = {
  post: {
    m: [0, 0, 0, '0 15px', 0],
    figure: {
      alignItems: 'flex-start',
      mb: 20,
    },
    h4: {
      fontWeight: 500,
      fontSize: [14, 16, 20],
      lineHeight: 1.5,
      a: {
        cursor: 'pointer',
        color: 'text',
        textDecoration: 'none',
      },
    },
  },
  commentCount: {
    display: 'flex',
    alignItems: 'center',
    mt: ['10px', '10px', '10px', '15px', '20px'],
    fontWeight: 500,
    fontSize: [13, 14, 14, 16],
    lineHeight: 1.6,
    color: rgba('#343D48', 0.8),
    img: {
      mr: '8px',
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
