import { useEffect, useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
// import LifeCycle from "./LifeCycle";

// https://jsonplaceholder.typicode.com/posts

function App() {
  const dataId = useRef(0);
  const [data, setData] = useState([]); //배열로 초기화

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
      (res) => res.json()
    );
    console.log(res);
    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.id,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1, //0~4까지의 수를 만들고, 정수로 만들어주기 위해 Math.floor 해주고 +1 => 1~5 랜덤!
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };
  const onRemove = (targetId) => {
    // console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  return (
    <div className="App">
      {/* <LifeCycle/> */}
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
