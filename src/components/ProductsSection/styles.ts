import styled from "styled-components"

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 96px 0 0 0;

  width: 100%;
  max-width: 1440px;

  .arrow-icon {
    font-size: 30px;
    color: #bdbdbd;
    cursor: pointer;
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

export const ListCircle = styled.nav`
  display: flex;
  gap: 30px;

  margin-bottom: 50px;

  .selected {
    height: 12px;
    width: 22.5px;

    background-color: #aa8232;

    border-radius: 10px;
    display: inline-block;
  }

  .not-selected {
    height: 10.5px;
    width: 10.5px;

    border: 1.5px solid #aa8232;
    border-radius: 50%;
    display: inline-block;
  }
`
