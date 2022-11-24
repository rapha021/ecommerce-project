import { ICategory } from "../../database/db"
import { Card } from "./styles"

interface IProps {
  category: ICategory
}

const CategoryCard = ({ category }: IProps) => {
  return (
    <Card img={category.imgUrl} hoverImg={category.hoverImg}>
      <h3>{category.title}</h3>
      <a href="#">VER MAIS</a>
    </Card>
  )
}

export default CategoryCard
