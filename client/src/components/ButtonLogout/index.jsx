import logout from "../../assets/img/logout.svg";
import { Container } from "./styles";

export function ButtonLogout() {
  return (
    <Container>
      <img src={logout} alt="Logout" />
    </Container>
  );
}
