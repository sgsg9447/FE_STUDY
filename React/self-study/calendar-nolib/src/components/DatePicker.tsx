import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Calendar from "./Calendar";

type Props = {};

const DatePicker = (props: Props) => {
  let DATE = new Date();
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth() + 1;

  const [month, setMonth] = React.useState(MONTH);
  const [year, setYear] = React.useState(YEAR);
  const [totalDate, setTotalDate] = React.useState([]);

  const changeDate: any = (month: any) => {
    // 이전날짜
    let PreviousLastDate = new Date(YEAR, month - 1, 0).getDate();
    let PreviousLastDay = new Date(YEAR, month - 1, 0).getDay();
    //다음 날짜
    const NextDate = new Date(YEAR, month, 0).getDate();
    const NextDay = new Date(YEAR, month, 0).getDay();

    //이전날짜 생성
    let PVLD = [];
    if (PreviousLastDay !== 6) {
      for (let i = 0; i < PreviousLastDay + 1; i++) {
        //unshift() 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환합니다.
        PVLD.unshift(PreviousLastDate - i);
      }
    }
    //다음 날짜 생성
    let TLD = [];
    for (let i = 1; i < 7 - NextDay; i++) {
      if (i === 0) {
        return TLD;
      }
      TLD.push(i);
    }
    //현재 날짜
    let TD = Array.from(Array.from(Array(NextDate + 1)).keys()).slice(1);
    return PVLD.concat(TD, TLD);
  };

  useEffect(() => {
    setTotalDate(changeDate(7));
  }, []);

  useEffect(() => {
    setTotalDate(changeDate(month));
  }, [month]);

  const [today, setToday] = useState(0);

  const goToday = () => {
    let TODAY = new Date().getDate();
    let goMonth = new Date().getMonth() + 1;
    setMonth(goMonth);
    setToday(TODAY);
  };

  return (
    <div className="date-picker-container">
      <BackgroundContainer></BackgroundContainer>
      <Calendar />
    </div>
  );
};

export default DatePicker;

const BackgroundContainer = styled.div`
  background-image: linear-gradient(#fdb298, #b176fe);
  width: 100%;
  height: 500px;
`;
