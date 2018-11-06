import Link from 'next/link';
import styled from 'styled-components';
import Meta from './Meta';

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly
  font-size: 18px;
  padding-bottom: 10px;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.7);
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