import styled from "styled-components"

export const Container = styled.section`
  .wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1440px;
  }

  display: flex;
  justify-content: center;

  box-sizing: border-box;

  width: 100%;
  height: 117px;

  background-color: #f5f6fa;

  .info-tag {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    width: 250px;
  }

  h2 {
    font-size: 14px;
    font-weight: 600;
    font-size: 14px;
    line-height: 23px;

    max-width: 200px;
  }

  svg {
    font-size: 40px;
  }
`
