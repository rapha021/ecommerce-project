import { Container } from "./styles"
import { AiOutlineDropbox } from "react-icons/ai"
import { RiTruckLine } from "react-icons/ri"
import { TbChartCircles, TbCreditCard } from "react-icons/tb"

const InfoSection = () => {
  return (
    <Container>
      <div className="wrapper">
        <span className="info-tag">
          <TbCreditCard />
          <h2>Tudo em até 6x sem juros</h2>
        </span>

        <span className="info-tag">
          <RiTruckLine />
          <h2>FRETE GRÁTIS nas compras acima de R$ 49,00 para todo o Brasil</h2>
        </span>

        <span className="info-tag">
          <TbChartCircles />
          <h2>Hinode Prime: Receba em casa todo mês com 20% OFF</h2>
        </span>

        <span className="info-tag">
          <AiOutlineDropbox />
          <h2>Garanta mais economia com frete inteligente</h2>
        </span>
      </div>
    </Container>
  )
}

export default InfoSection
