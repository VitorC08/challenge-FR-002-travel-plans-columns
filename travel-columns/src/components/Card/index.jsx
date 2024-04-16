
import theme from "../../styles/theme"
import { Columns } from "../Columns"
import { Container } from "./sytle"

import basicIcon from "../../assets/basic.svg"
import standardIcon from "../../assets/standard.svg"
import premiumIcon from "../../assets/premium.svg"


export function Card() {
    return(
    <Container>
        <Columns title="Basic" description="Nosso plano Básico oferece passagens de ônibus para clientes que desejam viajar com comodidade e segurança." 
        color={theme.COLORS.ORANGE} 
        svg={basicIcon}
        price={199}
        fbuttonFontColor={theme.COLORS.ORANGE} />
    
        <Columns title="Standard" 
        description="Nosso plano Standard oferece passagens de ônibus e avião para clientes que desejam viajar com conveniência e flexibilidade." 
        color={theme.COLORS.AQUA}
         svg={standardIcon}
         price= {299}
         buttonFontColor= {theme.COLORS.AQUA} />


        <Columns title="Premium" 
        description="Nosso plano Premium oferece variedade de opções em transporte, passagens de ônibus, avião e navio." 
        color={theme.COLORS.GREEN} 
        svg={premiumIcon}
        price={399}
        buttonFontColor={theme.COLORS.GREEN}/>
    </Container>
    
    )
}