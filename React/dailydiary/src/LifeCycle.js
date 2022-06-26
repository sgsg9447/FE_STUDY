import React, { useEffect, useState } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log("Mount!");
    return () => {
      //UnMout 시점에 실행되게 됨 -> 콜백함수가 return 함수를 실행하게 하면 됨!
      console.log("UnMount!!!");
    };
  }, []);
  return <div>Unmount Testing Component</div>;
};

const LifeCycle = () => {
  //   const [count, setCount] = useState(0);
  //   const [text, setText] = useState("");

  const [isVisible, SetIsVisible] = useState(false);
  const toggle = () => SetIsVisible(!isVisible);

  //   useEffect(() => {
  //     console.log("Mount!"); //이 콜백함수는 컴포넌트가 Mount 시점에만 작동하기 때문에, +버튼을 눌러도 작동하지않음,
  //     //마운트 시점에 뭘 하고 싶으면, 두번째인자에 빈배열 전달해주고 콜백함수에 하고싶은걸 넣어주면 된다!
  //   }, []);

  //   useEffect(() => {
  //     console.log("Update!!"); //dependency array를 전달하지않으면 업데이트 될 때마다 렌더됨!
  //   });

  //   useEffect(() => {
  //     console.log(`count is update: ${count}`);
  //   }, [count]); //dpendency array에 count를 넣어주면, dpendency array의 값이 변화하게 되면 콜백함수가 실행이된다!
  return (
    <div style={{ padding: 20 }}>
      {/* <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
      </div> */}
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest />}
    </div>
  );
};
export default LifeCycle;
