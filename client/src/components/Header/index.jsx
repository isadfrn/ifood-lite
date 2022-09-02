import macarons from "../../assets/img/macarons.svg";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <img src={macarons} alt="Macarons" />
      <div>
        <h1>Unparalleled flavors</h1>
        <h2>Feel the care of preparation with selected ingredients</h2>
      </div>
    </Container>
  );
}
