import React from 'react';
import Layout from '../components/Layout';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

const NotFoundPage: React.FC = () => (
  <Layout title="404: Not Found">
    <Helmet>
      <title>404: Not Found | GroundChain</title>
    </Helmet>
    <Container className="text-center mt-5">
      <div className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid py-5">
          <h1>404: Page Not Found</h1>
          <p>
            Oops! Looks like you've hit a block that's not part of our chain.
          </p>
          <p>
            But don't worry, you're not the first one to lose a few tokens in the wild!
          </p>
          <p>
            <Button variant="primary" as={Link} to="/">
              Back to Home
            </Button>
          </p>
        </div>
      </div>
    </Container>
  </Layout>
);

export default NotFoundPage;
