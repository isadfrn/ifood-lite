import left from "../../assets/img/left.svg";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, DetailsContainer, BackLink, InputWrapper } from "./styles";

export function CreateProduct() {
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
        <div>
          <h2>Edit product</h2>
          <form>
            <InputWrapper>
              <label>Name</label>
              <Input type="file" />
            </InputWrapper>
            <InputWrapper>
              <label>Name</label>
              <Input placeholder="Caesar salad" />
            </InputWrapper>

            <Button title="Edit" />
          </form>
        </div>
      </DetailsContainer>
      <Footer />
    </Container>
  );
}
