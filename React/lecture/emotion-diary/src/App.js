import React, { useReducer, useRef } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

//COMPONENTS
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetID);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDipatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    emotion: 1,
    content: "오늘의 일기1번",
    date: 1656297771240,
  },
  {
    id: 2,
    emotion: 2,
    content: "오늘의 일기2번",
    date: 1656297771241,
  },
  {
    id: 3,
    emotion: 3,
    content: "오늘의 일기3번",
    date: 1656297771242,
  },
  {
    id: 4,
    emotion: 4,
    content: "오늘의 일기4번",
    date: 1656297771243,
  },
  {
    id: 5,
    emotion: 5,
    content: "오늘의 일기5번",
    date: 1656297771245,
  },
];

function App() {
  // const env = process.env;
  // env.PUBLIC_URL = env.PUBLIC_URL || "";
  const [data, dispatch] = useReducer(reducer, dummyData);
  console.log(new Date().getTime());
  const dataId = useRef(0);
  // CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };
  // REMOVE
  const onRemove = (targetID) => {
    dispatch({ type: "REMOVE", targetID });
  };
  // EDIT
  const onEdit = (targetID, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetID,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDipatchContext.Provider value={(onCreate, onEdit, onRemove)}>
        <BrowserRouter>
          <div className="App">
            {/* <MyHeader
          headText={"헤더당"}
          leftChild={
            <MyButton text={"왼쪽 버튼"} onClick={() => alert("클릭")} />
          }
          rightChild={
            <MyButton text={"오른쪽 버튼"} onClick={() => alert("클릭")} />
          }
        /> */}
            {/* 이미지 받아오기 연습 */}
            {/* <img src={process.env.PUBLIC_URL + `/assets/emotion1.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion2.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion3.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion4.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion5.png`} /> */}

            {/* <MyButton
          text={"버튼"}
          onClick={() => alert("버튼 클릭")}
          type={"positive"}
        />
        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼 클릭")}
          type={"negative"}
        />
        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼 클릭")}
          type={"default"}
        /> */}

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="/diary/:id" element={<Diary />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDipatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
