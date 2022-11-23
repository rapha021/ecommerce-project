import styled from "styled-components"

interface IProps {
  url: string
}

export const Slide = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 30px;
  box-sizing: border-box;

  width: 100%;
  height: 790px;

  color: #fff;

  svg {
    font-size: 39px;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    width: 80%;
  }

  h2 {
    font-weight: 700;
    font-size: 92.15px;
    line-height: 92px;
    letter-spacing: -3.54px;

    width: 513px;
    font-family: "Playfair Display";
  }

  background-color: #d5b69a;
  background-image: url(/slide-photo-1.svg);
  background-repeat: no-repeat;
  background-position: center;
`
