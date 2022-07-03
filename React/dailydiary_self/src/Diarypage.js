import React, { useRef, useState } from "react";


function Diarypage() {
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleCangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    // console.log(state);
  };

  const inputRef = useRef();
  const textareaRef = useRef();

  const handleSubmit = () => {
    if (state.author === "" || state.author.length < 3) {
      inputRef.current.focus();
      return;
    }
    if (state.content === "" || state.content.length < 3) {
      textareaRef.current.focus();
      return;
    }
    alert("저장성공");
  };
  return (
    <div className="Diarypage">
      <h1>오늘의 일기</h1>
      <input
        name="author"
        value={state.author}
        onChange={handleCangeState}
        ref={inputRef}
      ></input>
      <textarea
        name="content"
        value={state.content}
        onChange={handleCangeState}
        ref={textareaRef}
      />
      <select name="emotion" value={state.emotion} onChange={handleCangeState}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button onClick={handleSubmit}> 일기 저장하기</button>
    </div>
  );
}

export default Diarypage;
