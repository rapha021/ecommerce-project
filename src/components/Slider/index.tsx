import { Slide } from "./styles"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import CustomButton from "../Button"

interface IProps {
  bgImg: string
  textColor: string
  title: string
  desc?: string
  buttonTitle: string
  buttonBgColor: string
  buttonBorderColor: string
  buttonTextColor: string
  buttonTextHoverColor: string
  buttonTransparent: true | false
  buttonHeight: string
  buttonWidth: string
  position: "left" | "right"
  arrow: false | true
}

const Slider = ({
  bgImg,
  textColor,
  title,
  desc,
  buttonBgColor,
  buttonTitle,
  buttonBorderColor,
  buttonHeight,
  buttonTextColor,
  buttonTextHoverColor,
  buttonTransparent,
  buttonWidth,
  position,
  arrow,
}: IProps) => {
  return (
    <Slide bgImg={bgImg} textColor={textColor} position={position}>
      {arrow && <AiOutlineArrowLeft />}
      <div className="title">
        <div className="wrapper">
          <h2>{title}</h2>
          {desc && <h3 className="description">{desc}</h3>}
          <CustomButton
            title={buttonTitle}
            bgColor={buttonBgColor}
            borderColor={buttonBorderColor}
            textColor={buttonTextColor}
            textHoverColor={buttonTextHoverColor}
            transparent={buttonTransparent}
            height={buttonHeight}
            width={buttonWidth}
          />
        </div>
      </div>
      {arrow && <AiOutlineArrowRight />}
    </Slide>
  )
}

export default Slider
