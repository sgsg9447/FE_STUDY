import React, { useEffect, useState } from "react";
import Body from "./components/Body";
import Head from "./components/Head";

type Props = {};

const Main = (props: Props) => {
  let DATE = new Date();
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth() + 1;

  const [month, setMonth] = React.useState(MONTH);
  const [year, setYear] = React.useState(YEAR);
  const [totalDate, setTotalDate] = React.useState<number[]>([]);

  const changeDate = (month: number): number[] => {
    // 이전날짜
    let PreviousLastDate = new Date(YEAR, month - 1, 0).getDate();
    let PreviousLastDay = new Date(YEAR, month - 1, 0).getDay();
    //다음 날짜
    const NextDate = new Date(YEAR, month, 0).getDate();
    const NextDay = new Date(YEAR, month, 0).getDay();

    //이전날짜 생성
    let PVLD = [];
    //6==토요일 즉, 토요일이 아니면,
    //이전달의 마지막 요일
    // console.log(PreviousLastDay + 1);
    if (PreviousLastDay !== 6) {
      for (let i = 0; i < PreviousLastDay + 1; i++) {
        //unshift() 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환합니다.
        PVLD.unshift(PreviousLastDate - i);
      }
    }
    //다음 요일 생성
    let TLD = [];
    for (let i = 1; i < 7 - NextDay; i++) {
      if (i === 0) {
        return TLD;
      }
      TLD.push(i);
    }
    //현재 날짜
    let TD = Array.from(Array.from(Array(NextDate + 1)).keys()).slice(1);
    console.log(PVLD.concat(TD, TLD));
    //PVLD = 이전달의 남은날짜 + 이번달의 날짜 + 다음달의 올 날짜
    return PVLD.concat(TD, TLD);
  };

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

  const changeMonth = (value: number) => {
    setMonth(value);
  };

  return (
    <div>
      <Head
        year={year}
        month={month}
        changeMonth={changeMonth}
        goToday={goToday}
      />
      <Body totalDate={totalDate} today={today} month={month} year={year} />
    </div>
  );
};

export default Main;
