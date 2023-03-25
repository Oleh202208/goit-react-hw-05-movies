import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Link, Nav } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <header>
        <Container>
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movie</Link>
          </Nav>
        </Container>
      </header>
      <main>
        <Container>
          <Suspense>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default Layout;
