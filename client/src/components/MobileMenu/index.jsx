import menu from "../../assets/img/menu.svg";
import close from "../../assets/img/close.svg";
import logo from "../../assets/img/logo.svg";
import search from "../../assets/img/search.svg";
import order from "../../assets/img/order.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Logout } from "../Logout";
import { Container, MenuButton, MenuBody, Search, OrderButton } from "./styles";

export function MobileMenu({ itemsOnOrder = 0 }) {
  const [openMenu, setOpenMenu] = useState(false);

  function handleMenuClick() {
    if (openMenu) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
  }

  function MenuIsOpen() {
    return (
      <MenuBody>
        <MenuButton onClick={handleMenuClick}>
          <img src={close} />
        </MenuButton>
        <Link to="/">My favorites</Link>
        <Search icon={search} placeholder="Search for food options" />
        <OrderButton icon={order} title={`My order (${itemsOnOrder})`} />
        <Logout />
      </MenuBody>
    );
  }

  return (
    <Container>
      <MenuButton onClick={handleMenuClick}>
        <img src={menu} alt="Menu" />
      </MenuButton>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      {openMenu && <MenuIsOpen />}
    </Container>
  );
}
