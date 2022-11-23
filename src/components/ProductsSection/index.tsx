import { IProduct, products } from "../../database/db"
import ProductCard from "../ProductCard"
import { Container, List, Wrapper } from "./styles"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

interface IProps {
  title: string
}

const ProductsSection = ({ title }: IProps) => {
  return (
    <Wrapper>
      <AiOutlineArrowLeft />
      <Container>
        <h2>{title}</h2>

        <List>
          {products.map((product: IProduct) => (
            <ProductCard product={product} key={product.name} />
          ))}
        </List>
      </Container>
      <AiOutlineArrowRight />
    </Wrapper>
  )
}

export default ProductsSection
