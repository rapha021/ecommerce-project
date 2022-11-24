import styled from "styled-components"

interface IProps {
  img: string
  hoverImg: string
}

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  width: 267px;
  height: 540px;

  margin-bottom: 117px;

  background-image: url(${(props: IProps) => props.img});

  background-color: rgb(0, 0, 0);

  color: #fff;

  transition: 300ms all;

  h3 {
    font-family: "Oswald";

    font-weight: 400;
    font-size: 23.2258px;
    line-height: 34px;

    transition: 1s all;
  }

  a {
    opacity: 0;
    transition: 1s all;

    color: #fff;
  }

  :hover {
    background-image: url(${(props: IProps) => props.hoverImg});

    h3 {
      font-weight: 400;
      font-size: 31.9355px;
      line-height: 68px;

      transform: translateY(-200px);
    }

    a {
      opacity: 1;
      transform: translateY(-200px);
    }
  }
`
