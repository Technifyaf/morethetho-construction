/** @jsx jsx */
import { jsx, Image , Text} from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/images/mclogo.png';
import logoWhite from 'assets/images/mclogo_black.png';

export default function Logo({ white }) {
  return (
    <Link
    path="/"
    sx={{
      variant: 'links.logo',
    }}
  >
    <Image src={white ? logoWhite : logo} width ="160" alt="startup landing logo" />
  </Link>
  );
}
