import { useRecoilValue } from "recoil";
import { todoListState } from "./recoil";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem: any) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;
