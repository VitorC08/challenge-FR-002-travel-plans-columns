import { StyledButton } from "../Button";
import { Container } from "./style";
import { Price } from "../Price";

export function Columns({ title, description, color ,svg, price, buttonFontColor }) { 
    return (
      <Container color={color}> 
        <img src={svg} alt="travel plan icon"/>
        <h2>{title}</h2>
        <p>{description}</p>
        <Price price={price.toFixed(2).replace(".",",")}/>
        <StyledButton fontColor={{color:buttonFontColor}} title="Compre Agora"/>
      </Container>
    );
  }