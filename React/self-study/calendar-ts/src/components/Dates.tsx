import React from "react";
import styled from "styled-components";

type Props = {
  index: number;
  currentMonthFirstDate: number;
  nextMonthFirstDate: number;
  elm: number;
  findToday: boolean;
  month: number;
  year: number;
};

const Dates = ({
  index,
  currentMonthFirstDate,
  nextMonthFirstDate,
  elm,
  findToday,
  month,
  year,
}: Props) => {

  return (
    <DatesContainer>
     
      <DateNum
        index={index}
        currentMonthFirstDate={currentMonthFirstDate}
        nextMonthFirstDate={nextMonthFirstDate}
        findToday={findToday}
      >
        <TodayCSS findToday={findToday}>{elm}</TodayCSS>
      </DateNum>
    </DatesContainer>
  );
};

export default Dates;

const DatesContainer = styled.li`
  position: relative;
  padding: 0 0.6vw;
  width: calc(100% / 7);
  height: 9vw;
  text-align: right;
  border-bottom: 1px solid #e4e3e6;
  border-left: 1px solid #e4e3e6;
  list-style: none;
`;

const DateNum = styled.div<{
  index: number;
  currentMonthFirstDate: number;
  nextMonthFirstDate: number;
  findToday: boolean;
}>`
  padding: 1vw 0.9vw 0 0;
  ${(props) => props.index < props.currentMonthFirstDate && `color: #fff;`};

  ${(props) =>
    props.nextMonthFirstDate > 0 &&
    props.index > props.nextMonthFirstDate - 1 &&
    `
    color: #fff;
  `};
`;

const TodayCSS = styled.span<{ findToday: boolean }>`
  ${(props) =>
    props.findToday &&
    `position: relative;
    padding: .4vw;
    border-radius: 50%;
    font-size: 1.2vw;
    font-weight: 700;
    color: #FFFFFF;
    background-color:red
 `}
`;

