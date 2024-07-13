import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import ThemeProvider from './ThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet';
import LayoutProps from '../types';
import { useSiteMetadata } from '../hooks/use-site-metadata';

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{`${title ? title + " : " : '' + useSiteMetadata().title}`}</title>
      </Helmet>
      <ThemeProvider>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">GroundChain</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/products">Products</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="mt-4">
          {children}
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Layout;