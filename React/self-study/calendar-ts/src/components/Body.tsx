import React, { useEffect } from "react";
import styled from "styled-components";
import Dates from "./Dates";

type Props = {
  today: number;
  month: number;
  year: number;
};

const Body = ({ today, month, year }: Props) => {
  const [totalDate, setTotalDate] = React.useState<number[]>([]);
  const currentMonthFirstDate = totalDate.indexOf(1);

  const nextMonthFirstDate = totalDate.indexOf(1, 7);
  const findToday = totalDate.indexOf(today);
  const currentMonth = new Date().getMonth() + 1;

  const changeDate = (month: number): number[] => {
    // 이전날짜
    let PreviousLastDate = new Date(year, month - 1, 0).getDate();
    let PreviousLastDay = new Date(year, month - 1, 0).getDay();
    //다음 날짜
    const NextDate = new Date(year, month, 0).getDate();
    const NextDay = new Date(year, month, 0).getDay();

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
    // console.log(PVLD.concat(TD, TLD));
    //PVLD = 이전달의 남은날짜 + 이번달의 날짜 + 다음달의 올 날짜
    return PVLD.concat(TD, TLD);
  };

  useEffect(() => {
    setTotalDate(changeDate(month));
  }, [month]);
  const DAY = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <Container>
      <BodyContentContainer>
        <Days>
          {DAY.map((elm, idx) => {
            return <div key={idx}>{elm}</div>;
          })}
        </Days>

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
      </BodyContentContainer>
    </Container>
  );
};

export default Body;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const BodyContentContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  border: 1px solid black;
  margin: 30px;
  box-sizing: border-box;
  height: 100vh;
`;

const Days = styled.div`
  display: flex;
  color: #969696;
  width: 100%;
  justify-content: space-between;
  margin: 10px 20px;
`;
