import styled from "styled-components"

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 96px 0 50px 0;

  width: 100%;
  max-width: 1440px;

  svg {
    font-size: 30px;
    color: #bdbdbd;
  }
`

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 1440px;
  height: 700px;

  h2 {
    font-family: "Oswald";
    font-weight: 300;
    font-size: 46px;
    line-height: 70px;

    margin-bottom: 50px;
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;

  width: 100%;
  height: 519px;

  li:first-child {
    margin-left: 65px;
  }

  li:last-child {
    margin-right: 65px;
  }
`
