import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { IProduct } from "../../database/db"
import CustomButton from "../Button"
import { Container } from "./styles"

interface IProps {
  product: IProduct
}

const ProductBannerCard = ({ product }: IProps) => {
  return (
    <Container product={product}>
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <div className="product-stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
        <div className="product-price">
          <h3>{product.price.toFixed(2).replace(".", ",")}</h3>
          <h4>
            em até 2x de {(product.price / 2).toFixed(2).replace(".", ",")}
          </h4>
        </div>
      </div>
      <CustomButton
        bgColor="#fff"
        borderColor="#F2994A"
        height="58px"
        width="268px"
        textColor="#F2994A"
        textHoverColor="#F2994A"
        title="COMPRAR"
        transparent={false}
      />
    </Container>
  )
}

export default ProductBannerCard
