import { Container } from "./styles";

export function InputStandard({ icon, ...rest }) {
  return (
    <Container>
      {icon && <img src={icon} alt="Icon" />}
      <input {...rest} />
    </Container>
  );
}
