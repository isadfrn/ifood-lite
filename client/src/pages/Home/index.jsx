import { Container } from "./styles";
import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";

export function Home() {
  return (
    <Container>
      <Navbar />
      <Header />
    </Container>
  );
}
