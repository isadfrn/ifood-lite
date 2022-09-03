import left from "../../assets/img/left.svg";
import right from "../../assets/img/right.svg";
import {
  Container,
  Slider,
  Head,
  CardArea,
  ButtonWrapper,
  NoItem,
} from "./styles";
import { Card } from "../Card";
import { useEffect, useState } from "react";

export function ProductSlider({ title, items }) {
  const [renderCard, setRenderCard] = useState(false);
  const [cardPositionFirst, setCardPositionFirst] = useState(0);
  const [gridSize, setGridSize] = useState(1);

  useEffect(() => {
    if (items.length === 0) {
      setRenderCard(false);
    } else {
      setRenderCard(true);
    }
  }, [renderCard]);

  function handleRightClick() {
    if (gridSize === 1 && cardPositionFirst < items.length - 1) {
      setCardPositionFirst(cardPositionFirst + 1);
    } else return;
  }

  function handleLeftClick() {
    if (cardPositionFirst > 0) {
      setCardPositionFirst(cardPositionFirst - 1);
    } else {
      return;
    }
  }

  function GridWithOneCard() {
    return (
      <Card
        image={items[cardPositionFirst].image}
        title={items[cardPositionFirst].title}
        description={items[cardPositionFirst].description}
        price={items[cardPositionFirst].price}
      />
    );
  }

  return (
    <Container>
      <Head>
        <h2>{title}</h2>
      </Head>
      <Slider>
        <ButtonWrapper>
          <button onClick={handleLeftClick}>
            <img src={left} />
          </button>
        </ButtonWrapper>
        <CardArea>
          {(() => {
            if (gridSize === 1) return <GridWithOneCard />;
          })()}
        </CardArea>
        <ButtonWrapper>
          <button onClick={handleRightClick}>
            <img src={right} />
          </button>
        </ButtonWrapper>
      </Slider>
    </Container>
  );
}
