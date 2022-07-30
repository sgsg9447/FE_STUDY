import styled from 'styled-components'
export const BlueBtn = styled.button`
  width: 220px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: #3175d8;
  color: #fff;
  font-size: 20px;
  :active {
    transform: scale(1.03);
  }
`;

export const AmPmBtn = styled.button`
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
