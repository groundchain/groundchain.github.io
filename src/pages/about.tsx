import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/Layout';

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>About GroundChain</h1>
      <p>
        GroundChain is a toolbox for blockchain and crypto-related products, focused on bringing real-world solutions to businesses and individuals.
      </p>
    </Layout>
  );
};

export default AboutPage;