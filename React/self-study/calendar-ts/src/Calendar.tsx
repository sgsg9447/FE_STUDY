import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Body from "./components/Body";
import Head from "./components/Head";

type Props = {};

const Calendar = (props: Props) => {
  let DATE = new Date();
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth() + 1;

  const [month, setMonth] = React.useState(MONTH);
  const [year, setYear] = React.useState(YEAR);

  const [today, setToday] = useState(0);

  const handleChangePrevButton = () => {
    const currentDate = new Date(`${year}-${month}`);
    currentDate.setMonth(currentDate.getMonth() - 1);
    setYear(currentDate.getFullYear());
    setMonth(currentDate.getMonth() + 1);
  };
  const handleChangeNextButton = () => {
    const currentDate = new Date(`${year}-${month}`);
    currentDate.setMonth(currentDate.getMonth() + 1);
    setYear(currentDate.getFullYear());
    setMonth(currentDate.getMonth() + 1);
  };

  return (
    <div>
      <Head
        year={year}
        month={month}
        handleChangePrevButton={handleChangePrevButton}
        handleChangeNextButton={handleChangeNextButton}
      />
      <BodyContainer>
        <Body today={today} month={month} year={year} />

        <Body today={today} month={month + 1} year={year} />
      </BodyContainer>
    </div>
  );
};

export default Calendar;

const BodyContainer = styled.div`
  display: flex;
`;
