import logo from "../../assets/img/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
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
    console.log(data);
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
            <Input
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
            <Input
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
            <Input
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
            <Input
              id="passwordConfirmation"
              name="passwordConfirmation"
              type="password"
              placeholder="Your credential"
              required
              onChange={(event) => setPasswordConfirmation(event.target.value)}
            />
          </div>
          <Button title="Create account" onClick={handleSignUp} />
        </form>
        <Link to="/">Already have an account</Link>
      </RightContainer>
    </Container>
  );
}
