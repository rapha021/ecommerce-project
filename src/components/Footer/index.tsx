import CustomButton from "../Button"
import { SubFooter } from "./styles"

const Footer = () => {
  return (
    <SubFooter>
      <div className="wrapper">
        <h2>Receba nossas ofertas e novidades</h2>
        <input type="text" placeholder="Digite seu nome" />
        <input type="email" placeholder="Digite seu email" />
        <CustomButton
          bgColor="#009BAA"
          borderColor="#fff"
          textColor="#fff"
          textHoverColor="#fff"
          title="CADASTRAR"
        />
      </div>
    </SubFooter>
  )
}

export default Footer
