import "./App.css";
import DiaryList from "./DiaryList";
import Diarypage from "./Diarypage";

const dummyList = [
  {
    id: 1,
    author: "김슬기1",
    content: "하이루1",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "김슬기2",
    content: "하이루2",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "김슬기3",
    content: "하이루3",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "김슬기4",
    content: "하이루4",
    emotion: 4,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <Diarypage />
      <DiaryList diarylist={dummyList} /> /
    </div>
  );
}

export default App;
