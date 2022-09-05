import { Container } from "./styles";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export function Orders({ ordersInfo }) {
  return (
    <Container>
      <Navbar />
      <div>
        <h2>Orders</h2>
        <div></div>
      </div>
      <Footer />
    </Container>
  );
}
