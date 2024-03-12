import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

export function Admin() {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <Card className="text-center">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Add a new product</Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="formArtistName">
                  <Form.Label>Artist name</Form.Label>
                  <Form.Control
                    type="ArtistName"
                    placeholder="Enter artist name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAlbumTitle">
                  <Form.Label>Album title</Form.Label>
                  <Form.Control type="AlbumTitle" placeholder="Album Title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="price" placeholder="Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formFile">
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer className="text-muted"></Card.Footer>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
