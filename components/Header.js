import Link from 'next/link';
import Meta from './Meta';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <nav>
    <Meta />
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/contact">
      <a style={linkStyle}>Contact</a>
    </Link>
    <Link href="/projects">
      <a style={linkStyle}>Projects</a>
    </Link>
  </nav>
);

export default Header;