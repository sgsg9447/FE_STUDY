import React from "react";
import styled from "styled-components";
import Calendar from "./Calendar";


type Props = {};

const DatePicker = (props: Props) => {
  return (
    <div className="date-picker-container">
      <BackgroundContainer></BackgroundContainer>
      <Calendar/>
    </div>
  );
};

export default DatePicker;

const BackgroundContainer = styled.div`
  background-image: linear-gradient(#fdb298, #b176fe);
  width: 100%;
  height: 500px;
`;
