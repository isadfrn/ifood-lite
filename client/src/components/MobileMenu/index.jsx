import menu from "../../assets/img/menu.svg";
import close from "../../assets/img/close.svg";
import logo from "../../assets/img/logo.svg";
import search from "../../assets/img/search.svg";
import order from "../../assets/img/order.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonLogout } from "../ButtonLogout";
import { ButtonMobileMenu } from "../ButtonMobileMenu";
import { InputMobileMenu } from "../InputMobileMenu";
import { Container, CloseOpenButton, MenuBody } from "./styles";

export function MobileMenu({ itemsOnOrder = 0 }) {
  const [openMobileMenu, setOpenMenu] = useState(false);

  function handleOpenMenu() {
    if (openMobileMenu) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
  }

  function MenuIsOpen() {
    return (
      <MenuBody>
        <CloseOpenButton onClick={handleOpenMenu}>
          <img src={close} />
        </CloseOpenButton>
        <Link to="/">My favorites</Link>
        <InputMobileMenu icon={search} placeholder="Search for food options" />
        <ButtonMobileMenu icon={order} title={`My order (${itemsOnOrder})`} />
        <ButtonLogout />
      </MenuBody>
    );
  }

  return (
    <Container>
      <CloseOpenButton onClick={handleOpenMenu}>
        <img src={menu} alt="Menu" />
      </CloseOpenButton>
      <img src={logo} alt="Logo" />
      {openMobileMenu && <MenuIsOpen />}
    </Container>
  );
}
