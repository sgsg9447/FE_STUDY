import React from "react";
import { atom, selector, useRecoilValue } from "recoil";
import axios from "axios";

const todoIdState = atom({
  key:'todoIdState',
  default: 1
})

const todoItemQuery = selector({
  key: 'todoItemQuery',
  get: async({get}) =>{
    const id = get(todoIdState);

    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    return response.data;
  }
})

function App() {
  const data = useRecoilValue(todoItemQuery)
  return <div>{data.title}
  {data.userId}</div>;
}

export default App;
