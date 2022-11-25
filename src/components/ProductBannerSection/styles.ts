import styled from "styled-components"
import { IProduct } from "../../database/db"

interface IProps {
  products: IProduct[]
}

export const Container = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  max-width: 1440px;
  height: 833px;

  .wrapper {
    display: flex;
    justify-content: center;
    gap: 24px;

    width: 80%;
  }

  li {
    width: 557px;
    height: 781px;
  }

  .arrow-icon {
    font-size: 30px;
    color: #bdbdbd;
    cursor: pointer;
  }
`
