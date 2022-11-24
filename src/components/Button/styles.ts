import styled from "styled-components"

interface IProps {
  bgColor: string
  borderColor: string
  textColor: string
  textHoverColor: string
  transparent: boolean
  height: string
  width: string
}

export const Button = styled.button`
  width: ${(props: IProps) => props.width};
  height: ${(props: IProps) => props.height};

  background-color: ${(props: IProps) =>
    props.transparent === true ? "transparent" : props.bgColor};
  border: 2px solid ${(props: IProps) => props.borderColor};
  color: ${(props: IProps) => props.textColor};

  cursor: pointer;

  h2 {
    font-weight: 700;
    font-size: 11.7143px;
    line-height: 18px;
  }
  transition: all 300ms;

  :hover {
    background-color: ${(props: IProps) => props.bgColor};
    color: ${(props: IProps) => props.textHoverColor};
  }
`
