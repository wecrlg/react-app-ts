import "../index.css";
import NavbarBs from "../components/Navbar";
import StoreItems from "../data/Store.json";
import { Row, Container } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";
import MobileView from "../utils/MobileView";
import StoreItemsCard from "../components/StoreItemsCard";

const headerStyle = {
  fontStyle: "normal",
  fontWeight: MobileView() ? "400" : "600",
  fontSize: MobileView() ? "30px" : "45px",
  color: "#000000",
};

export default function Store() {
  return (
    <div>
      <NavbarBs />
      <Container>
        <h1 style={headerStyle}>Store</h1>
        <Row xs={1} md={2} lg={3} className="g-3">
          {StoreItems.map((item) => (
            <Col key={item.id}>
              <StoreItemsCard {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
