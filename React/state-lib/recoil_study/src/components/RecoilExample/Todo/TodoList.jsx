import React from 'react'
import { useRecoilValue } from "recoil";
import { todoListState } from './TodoScore';

export default function TodoList() {
    const todoList = useRecoilValue(todoListState)
  return (
    <div>      {/* <TodoListCreator/> */}
     {todoList.map((item) => {
        <TodoItem key={item.id} item={item} />;
      })}
    </div>
  )
}




