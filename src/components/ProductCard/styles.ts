import styled from "styled-components"

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 266px;
  min-height: 550px;

  .product-img {
    width: 198px;
    height: 198px;

    padding: 56px 34px;

    background-color: #f2f2f2;
    border: 0.5px solid #f2f2f2;
  }

  .product-title {
    margin-top: 16px;

    font-family: "Oswald";
    font-weight: 400;
    font-size: 17px;
    line-height: 23px;
  }

  .product-stars {
    margin-top: 8px;

    font-size: 14px;
    svg {
      color: #009baa;
    }
  }

  .product-price {
    font-family: "Aktiv Grotesk Ex";
    font-weight: 700;
    font-size: 22px;
    line-height: 18px;
  }

  .product-promotion-price {
    font-family: "Open Sans";
    font-weight: 400;
    font-size: 14px;
    line-height: 23px;
    color: #828282;
  }

  .hearth-icon {
    font-size: 20px;
  }
`
