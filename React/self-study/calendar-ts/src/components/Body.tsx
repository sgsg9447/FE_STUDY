import React from "react";
import styled from "styled-components";
import Dates from "./Dates";

type Props = {
  totalDate: number[];
  today: number;
  month: number;
  year: number;
};

const Body = ({ totalDate, today, month, year }: Props) => {
  const currentMonthFirstDate = totalDate.indexOf(1);

  const nextMonthFirstDate = totalDate.indexOf(1, 7);
  const findToday = totalDate.indexOf(today);
  const currentMonth = new Date().getMonth() + 1;

  return (
    <BodyForm>
      {totalDate.map((date, index) => (
        <Dates
          key={index}
          index={index}
          currentMonthFirstDate={currentMonthFirstDate}
          nextMonthFirstDate={nextMonthFirstDate}
          elm={date}
          findToday={findToday === index && month === currentMonth}
          month={month}
          year={year}
        ></Dates>
      ))}
    </BodyForm>
  );
};

export default Body;

const BodyForm = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 70%;
`;
