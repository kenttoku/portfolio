import Link from 'next/link';
import styled from 'styled-components';
import Meta from './Meta';

const Nav = styled.nav`

`;

const NavItem = styled.a`
  font-style: normal;
  font-family: Helvetica, Arial;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-transform: uppercase;
  padding: .41667em .66667em;
`;

const Header = () => (
  <header>
    <Nav>
      <Meta />
      <Link href="/">
        <NavItem>Home</NavItem>
      </Link>
      <Link href="/about">
        <NavItem>About</NavItem>
      </Link>
      <Link href="/contact">
        <NavItem>Contact</NavItem>
      </Link>
      <Link href="/projects">
        <NavItem>Projects</NavItem>
      </Link>
    </Nav>
  </header>
);

export default Header;