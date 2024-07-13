import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/Layout';
import { Card, Row, Col } from 'react-bootstrap';

const ProductsPage: React.FC<PageProps> = () => {
  return (
    <Layout title='Products'>
      <h1>Our Products</h1>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Blockets</Card.Title>
              <Card.Img variant="top" src="https://i.imgur.com/431g86N.png" />
              <Card.Text>
                Allows businesses to sell event tickets backed by NFTs, reducing counterfeit and scalpers.
              </Card.Text>
              <a href='//blockets.groundchain.space' className="btn btn-primary">Learn More</a>
            </Card.Body>
          </Card>
        </Col>
        {/* Add more product cards here */}
      </Row>
    </Layout>
  );
};

export default ProductsPage;