import left from "../../assets/img/left.svg";
import right from "../../assets/img/right.svg";
import { useEffect, useState, useRef } from "react";
import {
  Container,
  Slider,
  Head,
  CardArea,
  ButtonWrapper,
  NoItem,
} from "./styles";
import { Card } from "../Card";

export function ProductSlider({ title, items }) {
  const [renderCard, setRenderCard] = useState(false);

  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  useEffect(() => {
    if (items.length === 0) {
      setRenderCard(false);
    } else {
      setRenderCard(true);
    }
  }, [renderCard]);

  return (
    <Container>
      <Head>
        <h2>{title}</h2>
      </Head>
      <Slider>
        <ButtonWrapper>
          <button onClick={() => scroll(-200)}>
            <img src={left} />
          </button>
        </ButtonWrapper>
        <CardArea ref={ref}>
          {renderCard ? (
            items.map((item, index) => (
              <Card
                description={item.description}
                image={item.image}
                price={item.price}
                title={item.title}
                key={index}
              />
            ))
          ) : (
            <NoItem>
              <span>No product on this section</span>
            </NoItem>
          )}
        </CardArea>
        <ButtonWrapper>
          <button onClick={() => scroll(200)}>
            <img src={right} />
          </button>
        </ButtonWrapper>
      </Slider>
    </Container>
  );
}
