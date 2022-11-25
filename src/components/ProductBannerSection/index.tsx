import { useState } from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import { IProduct, bannerProducts } from "../../database/db"
import ProductBannerCard from "../ProductBannerCard"
import { ListCircle } from "../ProductsSection/styles"
import { Container } from "./styles"

interface IProps {
  title?: string
}

const ProductBannerSection = ({ title }: IProps) => {
  const [page, setPage] = useState(0)

  const nextPage = () => {
    if (page === bannerProducts.length - 1) {
      return setPage(0)
    }

    setPage(page + 1)
  }

  const previousPage = () => {
    if (page === 0) {
      return setPage(bannerProducts.length - 1)
    }

    setPage(page - 1)
  }

  return (
    <>
      <Container>
        <AiOutlineArrowLeft className="arrow-icon" onClick={previousPage} />
        {/* <h2>{title}</h2> */}
        <ul className="wrapper">
          {bannerProducts[page].map((product: IProduct, index) => {
            if (product.bannerImg) {
              return <ProductBannerCard product={product} key={index} />
            }
          })}
        </ul>
        <AiOutlineArrowRight className="arrow-icon" onClick={nextPage} />
      </Container>
      <ListCircle>
        {bannerProducts.map((CurrentPage, index) => {
          if (index === page) {
            return <span className="selected" key={index}></span>
          }
          return <span className="not-selected" key={index}></span>
        })}
      </ListCircle>
    </>
  )
}

export default ProductBannerSection
