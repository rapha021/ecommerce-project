import styled from "styled-components"

export const SubFooter = styled.footer`
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 1440px;

    h2 {
      width: 421px;
      color: #fff;
      
      /* font-family: "Aktiv Grotesk Ex"; */
      font-weight: 400;
      font-size: 44px;
      line-height: 44px;
    }

    input {
      width: 237px;
      height: 26px;
      color: #fff;

      border: none;
      outline: none;
      background-color: transparent;
      border-bottom: 1px solid #fff;
    }

    input::placeholder {
      color: #ffff;
    }
  }

  display: flex;
  justify-content: center;

  width: 100%;
  height: 152px;

  background-color: #00002d;
`
