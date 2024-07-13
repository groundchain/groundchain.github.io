import React from 'react';
import { HeadProps, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import { Button } from 'react-bootstrap';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout title='Home'>
        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
          <div className="container-fluid py-5">
            <h1>Welcome to GroundChain</h1>
            <p>
              A toolbox for blockchain and crypto-related products, putting real-world solutions into business and people's devices.
            </p>
            <Button variant="primary" href="/products">Explore Our Products</Button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
