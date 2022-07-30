import React from "react";
import "./App.css";
import * as BtnStyle from "./Btn.Styled";

import Form from "./Form";
import SelectBox from "./SelectBox";
import TestForm from "./TestForm";
import TestSelect from "./TestSelect";
function App() {
  return (
    <div className="App">
      {/* <TestForm /> */}
      {/* <Form /> */}
      <BtnStyle.BlueBtn> Add Class </BtnStyle.BlueBtn>
      <BtnStyle.AmPmBtn className="am">AM</BtnStyle.AmPmBtn>
      <BtnStyle.AmPmBtn className="pm">PM</BtnStyle.AmPmBtn>
      <SelectBox />
      {/* <TestSelect /> */}
    </div>
  );
}

export default App;
