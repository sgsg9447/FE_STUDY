import React from "react";
import styled from "styled-components";
import { Weekday, Date } from "../types/types";
import { Weekdays } from "../configs/weekdays";
import { monthDates } from "../configs/MonthDays";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

type Props = {};

const Calendar = (props: Props) => {
  const generateDates = (date: number) => {
    for (let i = 0; i < 7; i++) {
      return (
        <DateButton value={date}>
          <Datetext>{date}</Datetext>
        </DateButton>
      );
    }
  };

  const generateWeeks = (dates: Array<Date>) => {
    let daysInWeek = 7;
    let tempArray = [];
    for (let i = 0; i < dates.length; i += daysInWeek) {
      tempArray.push(dates.slice(i, i + daysInWeek));
    }
    return tempArray;
  };
  return (
    <CalendarContainer>
      <DatepickerContainer>
        <RiArrowLeftSLine />
        <Span>Aug 2022</Span>
        <RiArrowRightSLine />
      </DatepickerContainer>
      <WeekdaysContainer>
        {Weekdays.map((day) => (
          <WeekdayText>{day}</WeekdayText>
        ))}
      </WeekdaysContainer>
      <CalendarContent>
        {generateWeeks(monthDates).map((week) => (
          <WeekText>
            {/* TODO: 이부분 잘 이해안됨! */}
            {week.map((day) => generateDates(day.day))}
          </WeekText>
        ))}
      </CalendarContent>
    </CalendarContainer>
  );
};

export default Calendar;

const CalendarContainer = styled.div`
  width: 55%;
  margin: auto;
  position: relative;
  top: -500px;
  padding-top: 200px;
`;

const DatepickerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: white;
`;
const WeekdaysContainer = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-around;
  background: white;
`;
const WeekdayText = styled.div`
  color: #888888;
`;
const CalendarContent = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const DateButton = styled.button`
  background: white;
  border: none;
`;
const WeekText = styled.div`
  display: inline-flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  background: white;
`;

const Span = styled.span`
  font-size: 20px;
`;

const Datetext = styled.p`
  width: 30px;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
