import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Body from "./components/Body";
import Head from "./components/Head";

type Props = {};

const Main = (props: Props) => {
  let DATE = new Date();
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth() + 1;

  const [month, setMonth] = React.useState(MONTH);
  const [year, setYear] = React.useState(YEAR);
  
  const [today, setToday] = useState(0);
  const changeYear = (value:number)=>{
    setYear(value)
  }
  // const goToday = () => {
  //   let TODAY = new Date().getDate();
  //   let goMonth = new Date().getMonth() + 1;
  //   setMonth(goMonth);
  //   setToday(TODAY);
  // };

  const changeMonth = (value: number) => {
    setMonth(value);
  };

  return (
    <div>
      <Head
        year={year}
        month={month}
        changeMonth={changeMonth}
        changeYear = {changeYear}
      />
      <BodyContainer>
        <Body today={today} month={month} year={year} />

        <Body today={today} month={month + 1} year={year} />
      </BodyContainer>
    </div>
  );
};

export default Main;

const BodyContainer = styled.div`
  display: flex;
`;
