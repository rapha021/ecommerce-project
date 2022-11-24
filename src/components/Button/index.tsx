import { Button } from "./styles"

interface IProps {
  title: string
  borderColor: string
  bgColor: string
  textColor: string
  textHoverColor: string
  transparent: boolean
  width: string
  height: string
}

const CustomButton = ({
  title,
  borderColor,
  bgColor,
  textColor,
  textHoverColor,
  transparent,
  height,
  width,
}: IProps) => {
  return (
    <Button
      bgColor={bgColor}
      borderColor={borderColor}
      textColor={textColor}
      textHoverColor={textHoverColor}
      transparent={transparent}
      width={width}
      height={height}
    >
      <h3>{title}</h3>
    </Button>
  )
}

export default CustomButton
