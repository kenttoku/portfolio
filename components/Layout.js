import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box; 

  @media (min-width: 400px) {
    width: 85%;
    padding: 0; 
  }

  @media (min-width: 550px) {
    width: 80%; 
  }
`;

const Layout = (props) => (
  <Container>
    <Header />
    <main>
      {props.children}
    </main>
    <Footer />
  </Container>
);

export default Layout;