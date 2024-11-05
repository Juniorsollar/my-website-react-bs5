import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <main>
        <Container>
          <Row className="px-4 my-5">
            <Col sm={6}>
              <Image
                src="https://media.licdn.com/dms/image/v2/C4E03AQFZUapwnxaV3w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1654094228278?e=1736380800&v=beta&t=8-cQLMa_pl3GtK0m8uRcWwcdXL9E9BDciRyK3bTI_xo"
                fluid
                roundedCircle
                className=""
              />
            </Col>
            <Col sm={6}>
              <h1 class="font-weight-light">Alessandro Sollar Jr.</h1>
              <p class="mt-4">
                Desenvolvedor de Software - FullStack | Engenheiro de Computação
                | JavaScript | TypeScript | React.JS | Node.js | Bootstrap |
                MySQL | Git | Docker
              </p>
              <Button
                href="https://www.linkedin.com/in/alessandrosollarjr/"
                variant="outline-primary"
              >
                {" "}
                E-mail{" "}
              </Button>
            </Col>
          </Row>
          <Row>
            <Card className="text-center bg-secondary text-white my-5 py-4">
              <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "scale-down",
                  }}
                  fluid
                  roundedCircle
                  variant="top"
                  src="https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png"
                />
                <Card.Body>
                  <Card.Title>LinkedIn</Card.Title>
                  <Card.Text>
                    Conecte-se comigo no LinkedIn para acompanhar minhas
                    atualizações profissionais, discutir novas ideias e explorar
                    oportunidades de colaboração.
                  </Card.Text>
                  <Button
                    href="https://www.linkedin.com/in/alessandrosollarjr/"
                    variant="outline-primary"
                  >
                    LinkedIn
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "scale-down",
                  }}
                  fluid
                  roundedCircle
                  variant="top"
                  src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"
                />
                <Card.Body>
                  <Card.Title>GitHub</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "scale-down",
                  }}
                  fluid
                  roundedCircle
                  variant="top"
                  src="https://www.creativefabrica.com/wp-content/uploads/2018/11/Hardware-Logo-by-Friendesign-Acongraphic-27-580x386.jpg"
                />
                <Card.Body>
                  <Card.Title>Consultoria de Hardwares</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <footer class="py-5 my-5 bg-dark">
        <container className="px-4">
          <p class="text-center text-white">
            Copyright &copy; Alessandro Sollar Jr. 2024
          </p>
        </container>
      </footer>
    </div>
  );
}

export default App;
