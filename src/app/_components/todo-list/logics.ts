import { TodoListType } from "@/app/_components/todo-list/type";

export const TodoListFetcher = async (): Promise<TodoListType> => {
  return await fetch("https://dummyjson.com/todos").then((res) => res.json());
};
