import { useMemo, useRef, useState } from "react";
import "./App.css";
import Counter from "./Counter";
import CreateUser from "./CreateUser";
import Hello from "./Hello";
import InputSample from "./InputSample";
import UserList from "./UserList";
import Wrapper from "./Wrapper";

function countActiveUsers(users) {
  console.log("활성 사용자수 세는중....");
  return users.filter((user) => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "sseul",
      email: "sseul9447@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "sseulgirang",
      email: "sseulgirang@gmail.com",
      active: false,
    },
    {
      id: 3,
      username: "sseul",
      email: "sgsg9447@gmail.com",
      active: false,
    },
  ]);
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]);

    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };
  const count = useMemo(()=>countActiveUsers(users),[users])
  return (
    // <Wrapper>
    //   <Hello name="react" color="red" isSpecial={true} />
    //   <Hello color="red" />
    // </Wrapper>
    // <Counter />
    // <InputSample />
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;
