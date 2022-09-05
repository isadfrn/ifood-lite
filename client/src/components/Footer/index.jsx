import logoWhite from "../../assets/img/logo-white.svg";
import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <img src={logoWhite} />
      <span>© 2022 - Todos os direitos reservados.</span>
    </Container>
  );
}
