import theme from "../../styles/theme";
import { Card } from "../Card";
import { Container } from "./sytle";

import basicIcon from "../../assets/basic.svg";
import standardIcon from "../../assets/standard.svg";
import premiumIcon from "../../assets/premium.svg";

export function Wrapper() {
  return (
    <Container>
      <Card
        title="Basic"
        description="Nosso plano Básico oferece passagens de ônibus para clientes que desejam viajar com comodidade e segurança."
        color={theme.COLORS.BLUE}
        svg={basicIcon}
        price={199}
        buttonFontColor={theme.COLORS.BLUE}
      />

      <Card
        title="Standard"
        description="Nosso plano Standard oferece passagens de ônibus e avião para clientes que desejam viajar com conveniência e flexibilidade."
        color={theme.COLORS.AQUA}
        svg={standardIcon}
        price={299}
        buttonFontColor={theme.COLORS.AQUA}
      />

      <Card
        title="Premium"
        description="Nosso plano Premium oferece variedade de opções em transporte, passagens de ônibus, avião e navio."
        color={theme.COLORS.GREEN}
        svg={premiumIcon}
        price={399}
        buttonFontColor={theme.COLORS.GREEN}
      />
    </Container>
  );
}
