import { Container } from "./styles";

export function InputMobileMenu({ icon, ...rest }) {
  return (
    <Container>
      {icon && <img src={icon} alt="Icon" />}
      <input {...rest} />
    </Container>
  );
}
