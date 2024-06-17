import "./App.css";
import Container from "react-bootstrap/Container";
import FeatureCard from "./components/FeatureCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <>
      <Container className="d-flex justify-content-center">
        <img src="/img/almanac_logo_cropped.jpg" alt="Almanac Logo" />
      </Container>
      <Container
        style={{
          backgroundColor: "#1d2d60",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
        fluid
      >
        <Container>
          <h1
            style={{
              textAlign: "center",
              marginBottom: "40px",
              color: "white",
            }}
          >
            Coming Soon...
          </h1>
          <p style={{ color: "white" }}>
            We are excited to introduce Almanac Services, a ground-breaking
            Internet Data Service company. Unlike traditional platforms, Almanac
            Services goes beyond providing information—we are committed to
            mobilizing and accelerating the economy. Our mission is to offer a
            more hands-on experience, emphasizing the unique needs of various
            market segments such as retail, wholesale, and direct-to-consumer
            (D2C).
          </p>
        </Container>
      </Container>
      <Container style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "40px",
            color: "#1d2d60",
          }}
        >
          About Us
        </h1>
        <p>
          Almanac Services is dedicated to revolutionizing the way businesses
          and consumers interact with data. We understand that in today’s
          fast-paced world, timely and actionable information is crucial for
          making informed decisions. Our platform is designed to deliver not
          just data, but also insights and support that drive real economic
          growth.
        </p>
        <h3 style={{ marginBottom: "20px", color: "#1d2d60" }}>
          Core Competencies
        </h3>
        <Container className="d-flex flex-column justify-content-center align-items-center">
          <Row>
            <Col>
              {" "}
              <FeatureCard
                title={"Flexible Market Solutions"}
                text={
                  "Tailored solutions for retail, wholesale, direct-to-customer and service sectors"
                }
              />
            </Col>
            <Col>
              <FeatureCard
                title={"Personalized Experience"}
                text={
                  "Dedicated account managers to ensure that businesses get the most out of our services"
                }
              />
            </Col>
            <Col>
              <FeatureCard
                title={"Economic Mobilization"}
                text={
                  "Programs and tools designed to foster business development and sustainability"
                }
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <div className="footer">
        <p style={{ fontSize: "small" }}>
          For inquiries and updates, please reach out to us at +919479470403
        </p>
        <p style={{ fontSize: "small" }}>
          © Almanac Services – Mobilizing Data, Accelerating Growth 2024.
        </p>
      </div>
    </>
  );
}

export default App;
