import React from "react";
import styled from "styled-components";
type Props = {
  year: number;
  month: number;
  changeMonth: (value: number) => void;
  goToday: () => void;
};

const Head = (props: Props) => {
  const { year, month, goToday, changeMonth } = props;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <section>
          <div>
            {year}년 {month}월
          </div>
          <div>
            <button onClick={() => changeMonth(month - 1)}>&lt;</button>
            <button onClick={() => goToday()}>오늘</button>
            <button onClick={() => changeMonth(month + 1)}>&gt;</button>
          </div>
        </section>
        <Days>
          {DAY.map((elm, idx) => {
            return <div key={idx}>{elm}</div>;
          })}
        </Days>
      </form>
    </div>
  );
};

const DAY = ["일", "월", "화", "수", "목", "금", "토"];
export default Head;

const Days = styled.div`
  display: flex;
`;
