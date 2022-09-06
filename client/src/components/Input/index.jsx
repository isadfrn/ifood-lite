import { Container } from "./styles";

export function Input({ icon, ...rest }) {
  return (
    <Container>
      {icon && <img src={icon} alt="Icon" />}
      <input {...rest} />
    </Container>
  );
}
