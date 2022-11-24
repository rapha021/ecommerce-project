import { categories, products } from "../../database/db"
import CategoryCard from "../CategoryCard"
import { Container } from "./styles"

interface IProps {
  title: string
}

const CategorySection = ({ title }: IProps) => {
  return (
    <Container>
      <h2>{title}</h2>
      <ul>
        {categories.map((category) => (
          <CategoryCard category={category} />
        ))}
      </ul>
    </Container>
  )
}

export default CategorySection
