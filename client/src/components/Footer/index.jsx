import logoWhite from "../../assets/img/logo-white.svg";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <Link to="/">
        <img src={logoWhite} />
      </Link>
      <span>© 2022 - Todos os direitos reservados.</span>
    </Container>
  );
}
