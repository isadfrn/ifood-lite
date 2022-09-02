import logo from "../../assets/img/logo.svg";
import search from "../../assets/img/search.svg";
import order from "../../assets/img/order.svg";
import { Link } from "react-router-dom";
import { InputStandard } from "../InputStandard";
import { ButtonStandard } from "../ButtonStandard";
import { ButtonLogout } from "../ButtonLogout";
import { Container, Logo, LogoutContainer } from "./styles";

export function DesktopMenu({ itemsOnOrder = 0 }) {
  return (
    <Container>
      <div>
        <Logo src={logo} />
      </div>

      <div>
        <Link to="#">My favorites</Link>
      </div>

      <div>
        <InputStandard icon={search} />
      </div>

      <div>
        <ButtonStandard icon={order} title={`Orders (${itemsOnOrder})`} />
      </div>

      <LogoutContainer>
        <ButtonLogout />
      </LogoutContainer>
    </Container>
  );
}
