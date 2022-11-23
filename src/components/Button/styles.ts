import styled from "styled-components"

interface IProps {
  bgColor: string
  borderColor: string
  textColor: string
  textHoverColor: string
}

export const Button = styled.button`
  width: 171px;
  height: 50px;

  margin-top: 31px;

  background-color: transparent;
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
