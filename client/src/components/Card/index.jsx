import heart from "../../assets/img/heart.svg";
import heartFilled from "../../assets/img/heart-filled.svg";
import plus from "../../assets/img/plus.svg";
import minus from "../../assets/img/minus.svg";
import { useState } from "react";
import { Button } from "../Button";
import {
  Container,
  FavoriteWrapper,
  CardButton,
  ControlsWrapper,
  ProductImage,
  Price,
  Quantity,
  LinkToDetails,
} from "./styles";

export function Card({ image, title, description, price }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(0);

  function handleFavoriteClick() {
    if (isFavorite) {
      setIsFavorite(false);
    } else {
      setIsFavorite(true);
    }
  }

  function handleIncrease() {
    setQuantity(quantity + 1);
  }

  function handleDecrease() {
    if (quantity === 0) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
  }

  return (
    <Container>
      <FavoriteWrapper>
        <CardButton onClick={handleFavoriteClick}>
          <img src={isFavorite ? heartFilled : heart} />
        </CardButton>
      </FavoriteWrapper>

      <LinkToDetails to="/details">
        <ProductImage src={image} alt="A dish image" />

        <h2>{title}</h2>
        <h3>{description}</h3>

        <Price>$ {price}</Price>
      </LinkToDetails>
      <ControlsWrapper>
        <CardButton onClick={handleDecrease}>
          <img src={minus} alt="Minus" />
        </CardButton>

        <Quantity>{quantity}</Quantity>

        <CardButton onClick={handleIncrease}>
          <img src={plus} alt="Plus" />
        </CardButton>

        <Button title="Add" />
      </ControlsWrapper>
    </Container>
  );
}
