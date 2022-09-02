import logo from "../../assets/img/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { InputStandard } from "../../components/InputStandard";
import { ButtonStandard } from "../../components/ButtonStandard";
import { Container, LeftContainer, RightContainer } from "./styles";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSignUp() {
    const data = {
      name,
      email,
      password,
      passwordConfirmation,
    };
  }

  return (
    <Container>
      <LeftContainer>
        <img src={logo} alt="iFood lite" />
      </LeftContainer>
      <RightContainer>
        <h2>Create your account</h2>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <InputStandard
              id="name"
              name="name"
              type="name"
              placeholder="Mary Jane"
              required
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <InputStandard
              id="email"
              name="email"
              type="email"
              placeholder="name@domain.com"
              required
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <InputStandard
              id="password"
              name="password"
              type="password"
              placeholder="Your credential"
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password Confirmation</label>
            <InputStandard
              id="passwordConfirmation"
              name="passwordConfirmation"
              type="password"
              placeholder="Your credential"
              required
              onChange={(event) => setPasswordConfirmation(event.target.value)}
            />
          </div>
          <ButtonStandard title="Create account" onClick={handleSignUp} />
        </form>
        <Link to="/">Already have an account</Link>
      </RightContainer>
    </Container>
  );
}
