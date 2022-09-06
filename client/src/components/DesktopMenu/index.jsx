import logo from "../../assets/img/logo.svg";
import search from "../../assets/img/search.svg";
import order from "../../assets/img/order.svg";
import { Link } from "react-router-dom";
import { Input } from "../Input";
import { Button } from "../Button";
import { Logout } from "../Logout";
import { Container, Logo, LogoutContainer } from "./styles";

export function DesktopMenu({ itemsOnOrder = 0 }) {
  return (
    <Container>
      <div>
        <Link to="/">
          <Logo src={logo} />
        </Link>
      </div>

      <div>
        <Link to="#">My favorites</Link>
      </div>

      <div>
        <Input icon={search} />
      </div>

      <div>
        <Button icon={order} title={`Orders (${itemsOnOrder})`} />
      </div>

      <LogoutContainer>
        <Logout />
      </LogoutContainer>
    </Container>
  );
}
