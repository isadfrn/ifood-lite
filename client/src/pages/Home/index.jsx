import { Container } from "./styles";
import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { ProductSlider } from "../../components/ProductSlider";
import { Footer } from "../../components/Footer";

export function Home() {
  const data = [
    {
      image:
        "https://s3.us-west-2.amazonaws.com/whatsmenu/production/qatarhamburgueria/products/219309/abcb882b10a6dc6bc9ad7e40e0d7eec4jpg",
      title: "Beirute",
      description:
        "Beirute é um sanduíche brasileiro provavelmente influenciado pela culinária sírio-libanesa",
      price: "8,99",
    },
    {
      image: "https://assets.unileversolutions.com/recipes-v2/230411.jpg",
      title: "Hamburguer",
      description:
        "Hamburguer é um sanduíche brasileiro provavelmente influenciado pela culinária sírio-libanesa",
      price: "10,99",
    },
    {
      image:
        "https://www.pngitem.com/pimgs/m/121-1214716_lasagne-bolognese-sauce-italian-cuisine-pasta-food-lasagna.png",
      title: "Lasagna",
      description:
        "Lasagna é um sanduíche brasileiro provavelmente influenciado pela culinária sírio-libanesa",
      price: "19,99",
    },
    {
      image:
        "https://www.pngmart.com/files/16/Dark-Chocolate-Cookie-PNG-Photos.png",
      title: "Cookie",
      description:
        "Cookie é um sanduíche brasileiro provavelmente influenciado pela culinária sírio-libanesa",
      price: "4,99",
    },
    {
      image:
        "https://www.bistek.com.br/media/catalog/product/cache/15b2f1f06e1cd470c80b1f3fd7ec8301/9/9/997463.jpg",
      title: "Coke",
      description:
        "Coke é um sanduíche brasileiro provavelmente influenciado pela culinária sírio-libanesa",
      price: "2,99",
    },
  ];

  return (
    <Container>
      <Navbar />
      <Header />
      <ProductSlider title="Drinks" items={data} />
      <ProductSlider title="Drinks" items={data} />
      <ProductSlider title="Drinks" items={data} />
      <ProductSlider title="Drinks" items={data} />
      <Footer />
    </Container>
  );
}
