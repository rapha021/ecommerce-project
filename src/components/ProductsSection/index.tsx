import ProductCard from "../ProductCard"
import { IProduct, products } from "../../database/db"
import { Container, List, ListCircle, MainContainer, Wrapper } from "./styles"
import { useState } from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

interface IProps {
  title?: string
  bgColor?: string
}

const ProductsSection = ({ title, bgColor }: IProps) => {
  const [page, setPage] = useState(0)

  const nextPage = () => {
    if (page === products.length - 1) {
      return setPage(0)
    }

    setPage(page + 1)
  }

  const previousPage = () => {
    if (page === 0) {
      return setPage(products.length - 1)
    }

    setPage(page - 1)
  }

  return (
    <MainContainer bgColor={bgColor}>
      <Wrapper>
        <AiOutlineArrowLeft onClick={previousPage} className="arrow-icon" />
        <Container>
          {title && <h2>{title}</h2>}

          <List>
            {products[page].map((product: IProduct, index) => (
              <ProductCard product={product} index={index} key={index} />
            ))}
          </List>
        </Container>
        <AiOutlineArrowRight onClick={nextPage} className="arrow-icon" />
      </Wrapper>
      <ListCircle>
        {products.map((CurrentPage, index) => {
          if (index === page) {
            return <span className="selected" key={index}></span>
          }
          return <span className="not-selected" key={index}></span>
        })}
      </ListCircle>
    </MainContainer>
  )
}

export default ProductsSection
