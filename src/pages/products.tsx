import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/Layout';
import { Card, Button, Row, Col } from 'react-bootstrap';

const ProductsPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Our Products</h1>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Blockets</Card.Title>
              <Card.Text>
                Allows businesses to sell event tickets backed by NFTs, reducing counterfeit and scalpers.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Add more product cards here */}
      </Row>
    </Layout>
  );
};

export default ProductsPage;