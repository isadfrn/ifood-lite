import heart from "../../assets/img/heart.svg";
import heartFilled from "../../assets/img/heart-filled.svg";
import plus from "../../assets/img/plus.svg";
import minus from "../../assets/img/minus.svg";
import {
  Container,
  FavoriteWrapper,
  Button,
  ControlsWrapper,
  ProductImage,
  Price,
  Quantity,
} from "./styles";
import { useState } from "react";
import { ButtonStandard } from "../ButtonStandard";

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
        <Button onClick={handleFavoriteClick}>
          <img src={isFavorite ? heartFilled : heart} />
        </Button>
      </FavoriteWrapper>

      <ProductImage src={image} alt="A dish image" />

      <h2>{title}</h2>
      <h3>{description}</h3>

      <Price>$ {price}</Price>

      <ControlsWrapper>
        <Button onClick={handleDecrease}>
          <img src={minus} alt="Minus" />
        </Button>

        <Quantity>{quantity}</Quantity>

        <Button onClick={handleIncrease}>
          <img src={plus} alt="Plus" />
        </Button>

        <ButtonStandard title="Add" />
      </ControlsWrapper>
    </Container>
  );
}
