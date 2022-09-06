import { useState } from "react";
import {
  Container,
  Table,
  Pending,
  Preparing,
  Delivered,
  TableContainer,
  StatusContainer,
} from "./styles";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export function Orders({ ordersInfo, isAdmin }) {
  const data = [
    {
      status: "Pending",
      code: "00000004",
      details:
        "1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá",
      dateTime: "20/05 ás 18h00",
    },
    {
      status: "Preparing",
      code: "00000004",
      details:
        "1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá",
      dateTime: "20/05 ás 18h00",
    },
    {
      status: "Delivered",
      code: "00000004",
      details:
        "1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá",
      dateTime: "20/05 ás 18h00",
    },
    {
      status: "Delivered",
      code: "00000004",
      details:
        "1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá",
      dateTime: "20/05 ás 18h00",
    },
  ];

  const [status, setStatus] = useState();

  function Status(status) {
    if (status === "Pending") {
      return <Pending />;
    } else if (status === "Preparing") {
      return <Preparing />;
    } else {
      return <Delivered />;
    }
  }

  return (
    <Container>
      <Navbar />

      <Footer />
    </Container>
  );
}
