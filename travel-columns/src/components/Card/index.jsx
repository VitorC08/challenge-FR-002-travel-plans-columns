import { StyledButton } from "../Button";
import { Container } from "./style";
import { Price } from "../Price";
import { formatBudget } from "../../helper";

export function Card({
  title,
  description,
  color,
  svg,
  price,
  buttonFontColor,
}) {
  return (
    <Container color={color}>
      <img src={svg} alt="travel plan icon" />
      <h2>{title}</h2>
      <p>{description}</p>
      <Price price={formatBudget(price)} />
      <StyledButton fontColor={buttonFontColor}> Compre agora </StyledButton>
    </Container>
  );
}
