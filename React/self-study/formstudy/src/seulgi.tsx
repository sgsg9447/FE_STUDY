import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const AmPmBtn = (props: Props) => {
  const [click, setClick] = React.useState(false);
  const handleBtnClick = () => {
    setClick(!click);
  };
  return <AmPmTime onClick={handleBtnClick} isClicked={click}></AmPmTime>;
};

export default AmPmBtn;

const AmPmTime = styled.button<{ isClicked: boolean }>`
  width: 75px;
  height: 50px;
  font-size: 20px;
  
  background-color: ${(props) => (props.isClicked ? "gray" : "white")};
  color: ${(props) => (props.isClicked ? "gray" : "white")};

`;


export const AmPmBtn2 = styled.button`
  width: 75px;
  height: 50px;
  font-size: 20px;
  &.am {
    border: 1px solid #b4b4b4;
    background-color: #fff;
    color: #000;
  }
  &.pm {
    border: 1px solid #b4b4b4;
    background-color: #959595;
    color: #fff;
  }
  :active {
    transform: scale(1.03);
  }
`;
