import styled from "styled-components"
import { IProduct } from "../../database/db"

interface IProps {
  product: IProduct
}

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-image: url(${(props: IProps) => props.product.bannerImg});
  background-repeat: no-repeat;
  background-position: center;

  .product-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    width: 192px;
    height: 148px;
    padding: 18px 15px;
    margin: 12px 0 0 14px;

    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);

    h3 {
      font-family: "Oswald";
      font-weight: 400;
      font-size: 16px;
      line-height: 23px;
    }
  }

  .product-stars {
    margin-top: 8px;

    font-size: 14px;
    svg {
      color: #009baa;
    }
  }

  .product-price {
    h3 {
      font-family: "Aktiv Grotesk Ex";

      font-weight: 700;
      font-size: 22px;
      line-height: 22px;
    }

    h4 {
      font-family: "Aktiv Grotesk Ex";

      font-weight: 700;
      font-size: 10px;
      line-height: 18px;

      color: #828282;
    }
  }
  button {
    margin-bottom: 46px;
    margin-left: 134px;
  }
`
