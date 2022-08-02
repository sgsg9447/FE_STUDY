import React from "react";
import styled from "styled-components";
type Props = {
  year: number;
  month: number;
  changeMonth: (value: number) => void;
  changeYear: (value: number) => void;
};

const Head = (props: Props) => {
  const { year, month, changeMonth, changeYear } = props;
  const handleChangePrevButton = () => {
    if (month < 12) {
      changeMonth(month - 1);
    } else if (month <= 0) {
      changeMonth(month + 12);
      changeYear(year - 1);
    }
  };
  return (
    <HeadContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <ButtonContainer>
          <Button onClick={handleChangePrevButton}>&lt;</Button>
          <HeadTextContainer>
            <HeadText>
              {year}년 {month}월
            </HeadText>
            <HeadText>
              {year}년 {month + 1}월
            </HeadText>
          </HeadTextContainer>
          <Button onClick={() => changeMonth(month + 1)}>&gt;</Button>
        </ButtonContainer>
      </form>
    </HeadContainer>
  );
};

export default Head;

const HeadContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;

const HeadTextContainer = styled.div`
  display: flex;
  width: 100%;
  height: 5vh;
`;

const HeadText = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  &:active {
    transform: scale(1.2);
  }
`;
