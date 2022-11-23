import { Button } from "./styles"

interface IProps {
  title: string
  borderColor: string
  bgColor: string
  textColor: string
  textHoverColor: string
}

const CustomButton = ({
  title,
  borderColor,
  bgColor,
  textColor,
  textHoverColor,
}: IProps) => {
  return (
    <Button
      bgColor={bgColor}
      borderColor={borderColor}
      textColor={textColor}
      textHoverColor={textHoverColor}
    >
      <h3>{title}</h3>
    </Button>
  )
}

export default CustomButton
