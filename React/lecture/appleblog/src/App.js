import "./App.css";
import { useState } from "react";

function App() {
  let [글제목, set글제목] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  let [따봉, set따봉] = useState([0, 0, 0]);
  let [title, setTitle] = useState(0);
  let [modal, setModal] = useState(false);
  let [입력값, set입력값] = useState("");
  function changeName() {
    let copy = [...글제목];
    copy[0] = "여자 코트 추천";
    set글제목(copy);
    console.log(copy);
  }

  function submit() {
    let copy = [...글제목];
    copy.unshift(입력값);
    set글제목(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>blog당</h4>
      </div>
      <button onClick={changeName}>글 수정</button>
      <button
        onClick={() => {
          let copy2 = [...글제목];
          copy2.sort();
          set글제목(copy2);
        }}
      >
        가나다순정렬
      </button>

      {글제목.map((a, i) => {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setTitle(i);
                setModal(!modal);
              }}
            >
              {a}
              <span
                onClick={() => {
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  set따봉(copy);
                }}
              >
                👍🏻 {[따봉[i]]}{" "}
              </span>
            </h4>
            <p>1월 4일 발행</p>
            <button
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                set글제목(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      {modal ? <Modal title={title} name={글제목} function={changeName} /> : ""}
      <input
        onChange={(e) => {
          set입력값(e.target.value);
        }}
      />
      <button onClick={submit}>입력</button>
    </div>
  );
}

function Modal(props) {
  console.log(props.title);
  return (
    <div className="modal">
      <h4>{props.name[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          props.function();
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;
