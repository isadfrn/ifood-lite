import logo from "../../assets/img/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, LeftContainer, RightContainer } from "./styles";

export function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    const data = {
      email,
      password,
    };
    console.log(data);
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
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="name@domain.com"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Your credential"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <Button title="Login" onClick={handleLogin} />
        </form>
        <Link to="/signup">Create account</Link>
      </RightContainer>
    </Container>
  );
}
