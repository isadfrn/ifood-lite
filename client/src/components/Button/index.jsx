import { Container } from "./styles";

export function Button({ icon, title, loading = false, ...rest }) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {icon && <img src={icon} alt="Icon" />}
      {title}
    </Container>
  );
}
