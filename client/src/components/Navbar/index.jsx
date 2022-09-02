import logo from "../../assets/img/logo.svg";
import search from "../../assets/img/search.svg";
import order from "../../assets/img/order.svg";

import { Input } from "../Input";
import { Button } from "../Button";

import { Container } from "./styles";

export function Navbar({ orderQuantity = 0 }) {
  return (
    <Container>
      <img src={logo} alt="iFood lite" />
      <a href="#">My favorites</a>
      <Input icon={search} />
      <Button icon={order} title={`My order (${orderQuantity})`} />
    </Container>
  );
}
