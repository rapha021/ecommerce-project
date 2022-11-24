import { Slide } from "./styles"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import CustomButton from "../Button"

const MainSlide = () => {
  return (
    <Slide>
      <AiOutlineArrowLeft />
      <div className="title">
        <div className="wrapper">
          <h2>Base Líquida DAZZLE</h2>
          <CustomButton
            title="COMPRAR"
            bgColor="#fff"
            borderColor="#fff"
            textColor="#fff"
            textHoverColor="#000"
            transparent={true}
            height="50px"
            width="171px"
          />
        </div>
      </div>
      <AiOutlineArrowRight />
    </Slide>
  )
}

export default MainSlide
