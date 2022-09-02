import logo from "../../assets/img/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { InputStandard } from "../../components/InputStandard";
import { ButtonStandard } from "../../components/ButtonStandard";
import { Container, LeftContainer, RightContainer } from "./styles";

export function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    const data = {
      email,
      password,
    };
  }

  return (
    <Container>
      <LeftContainer>
        <img src={logo} alt="iFood lite" />
      </LeftContainer>
      <RightContainer>
        <h2>Login in your account</h2>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <InputStandard
              id="email"
              name="email"
              type="email"
              placeholder="name@domain.com"
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
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <ButtonStandard title="Login" onClick={handleLogin} />
        </form>
        <Link to="/signup">Create account</Link>
      </RightContainer>
    </Container>
  );
}
