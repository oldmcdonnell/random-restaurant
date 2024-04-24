import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
    <Container className="headerStyle">
      <Row>
        <Col className='largerFont'>Totally Not Poison</Col>
      </Row>
            <Row>
        <Col>Bar & Grille</Col>
      </Row>
    </Container>
  );
}

export default Header