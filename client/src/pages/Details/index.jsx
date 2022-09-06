import left from "../../assets/img/left.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import {
  Container,
  DetailsContainer,
  BackLink,
  Product,
  ProductInfo,
  IngredientsGrid,
  Ingredient,
} from "./styles";

export function Details() {
  const data = {
    image:
      "https://www.seriouseats.com/thmb/ugNLQE6hZcoZx0Tzu780h1L3lfc=/3750x3750/smart/filters:no_upscale()/the-best-caesar-salad-recipe-06-40e70f549ba2489db09355abd62f79a9.jpg",
    title: "Caesar salad",
    description:
      "Caesar salad, salada Caesar ou salada César é uma salada preparada com alface-romana e molho Caesar. Os temperos usados mais habitualmente para compor este molho são azeite de oliva, suco de limão, anchovas, queijo parmesão, molho inglês, sal, açúcar e pimenta-preta",
    ingredients: [
      {
        image:
          "https://i.pinimg.com/originals/99/d5/b4/99d5b4cc0b8d2b89e9a3c333be8ab81e.png",
        name: "Alface",
      },
      {
        image:
          "https://supermercadomanos.com.br/wp-content/uploads/2017/07/Cenoura.png",
        name: "Cenoura",
      },
      {
        image:
          "https://www.saladices.com.br/wp-content/uploads/2020/06/croutons.png",
        name: "Croutons",
      },
    ],
  };

  return (
    <Container>
      <Navbar />
      <DetailsContainer>
        <BackLink>
          <Link to="/">
            <img src={left} />
            <span>voltar</span>
          </Link>
        </BackLink>
        <Product>
          <img src={data.image} />

          <ProductInfo>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <IngredientsGrid>
              {data.ingredients.map((item, index) => (
                <Ingredient key={index}>
                  <img src={item.image} />
                  <span>{item.name}</span>
                </Ingredient>
              ))}
            </IngredientsGrid>
          </ProductInfo>
        </Product>
      </DetailsContainer>

      <Footer />
    </Container>
  );
}
