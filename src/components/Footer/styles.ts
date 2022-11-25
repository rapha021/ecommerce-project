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

      font-family: "Aktiv Grotesk Ex";
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

export const Footer = styled(SubFooter)`
  display: flex;
  justify-content: center;
  gap: 89px;

  height: 422px;
  padding-top: 71px;

  background-color: #e1dcd5;

  .wrapper {
    align-items: flex-start;
  }

  .actions {
    display: flex;
    flex-direction: column;
    gap: 10px;

    font-family: "Open Sans";

    font-size: 12px;
    line-height: 22px;

    h4 {
      font-weight: 600;
    }

    a {
      font-weight: 400;
      text-decoration: none;
      color: #000;
    }

    a:hover {
      text-decoration: underline;
    }

    span {
      font-weight: 400;
      text-align: right;
    }
  }

  .actions:last-child {
    align-items: flex-end;
  }

  .socials {
    display: flex;
    gap: 25px;
    font-size: 40px;
  }
`

export const LastFooter = styled(SubFooter)`
  height: 258px;
  background-image: url("/last-footer.png");
  background-repeat: no-repeat;
  background-position: center;

  background-color: #fff;
  border-top: 15px solid #dcdcdc;
`
