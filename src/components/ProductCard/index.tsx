import { IProduct } from "../../database/db"
import { Card } from "./styles"
import { AiOutlineHeart, AiFillStar, AiOutlineStar } from "react-icons/ai"
import CustomButton from "../Button"

interface IProps {
  product: IProduct
  index: number
}

const ProductCard = ({ product, index }: IProps) => {
  const { name, price, promotionPrice, inPromotion, img } = product
  return (
    <Card key={index}>
      {/* <AiOutlineHeart className="hearth-icon" /> */}
      <img className="product-img" src={img} alt={name} />

      <h3 className="product-title">{name}</h3>

      <div className="product-stars">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
      </div>

      {inPromotion ? (
        <>
          <h3
            className="product-promotion-price"
            style={{ textDecoration: "line-through" }}
          >
            R$ {price.toFixed(2).replace(".", ",")}
          </h3>
          <h3 className="product-price">
            R$ {promotionPrice.toFixed(2).replace(".", ",")}
          </h3>
        </>
      ) : (
        <h3 className="product-price">
          R$ {price.toFixed(2).replace(".", ",")}
        </h3>
      )}

      <CustomButton
        title="COMPRAR"
        bgColor="#F2994A"
        borderColor="#F2994A"
        textColor="#F2994A"
        textHoverColor="#fff"
        transparent={true}
        height="58px"
        width="100%"
      />
    </Card>
  )
}

export default ProductCard
