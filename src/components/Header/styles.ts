import styled from "styled-components"

export const SubContainer = styled.header`
  display: flex;
  justify-content: center;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    box-sizing: border-box;

    width: 100%;
    max-width: 1440px;

    @media (max-width: 1500px) {
      max-width: 1030px;
    }
  }

  width: 100%;
  height: 37.79px;

  background-color: #fdfdfd;

  .actions {
    display: flex;
    gap: 30px;

    font-weight: 400;
    font-size: 10px;
    line-height: 22px;

    a {
      font-weight: 700;
      text-decoration: underline;
      color: #333333;
    }
  }
`

export const Container = styled(SubContainer)`
  box-sizing: border-box;

  height: 90px;

  background-color: #fff;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);

  svg {
    font-size: 21px;
  }
  h4 {
    font-size: 9px;
    cursor: pointer;
  }
  h3 {
    font-size: 12px;
    cursor: pointer;
  }
  font-weight: 600;

  .search-bar {
    display: flex;
    align-items: center;

    width: 399px;
    height: 37px;

    opacity: 0.5;
    background-color: #e1dcd5;

    border: 0px solid;
    border-radius: 100px;

    font-size: 22px;

    input {
      width: 85%;
      height: 95%;
      padding: 0 10px;

      background-color: transparent;

      border: 0px solid;
      border-radius: 100px 0 0 100px;
    }

    span {
      cursor: pointer;
    }
  }

  .action-buttons {
    display: flex;
    align-items: center;
    gap: 11px;
  }

  .action-buttons:last-child {
    svg {
      color: #aa8232;
    }
  }
`
export const LastContainer = styled(Container)`
  height: 49px;

  background-color: #aa8232;

  color: #fff;
  h2 {
    font-size: 14px;
    cursor: pointer;
  }

  svg {
    cursor: pointer;
  }
`
