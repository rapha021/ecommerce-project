import styled from "styled-components"

interface IProps {
  bgImg: string
  textColor: string
  position: "left" | "right"
}

export const Slide = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 0 30px;
  box-sizing: border-box;

  width: 100%;
  height: 790px;

  color: ${(props: IProps) => props.textColor};

  svg {
    font-size: 39px;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: ${(props: IProps) =>
      props.position === "left" ? "flex-start" : "flex-end"};

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

  .description {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 24px;
    width: 500px;
  }

  background-color: #d5b69a;
  background-image: ${(props: IProps) => `url(${props.bgImg})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`
