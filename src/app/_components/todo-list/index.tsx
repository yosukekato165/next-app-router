import { TodoListFetcher } from "@/app/_components/todo-list/logics";

export const TodoList = async () => {
  const todos = await TodoListFetcher();
  return (
    <ul>
      {todos.todos.map((e: any) => {
        return (
          <li key={e.id} className={"text-white"}>
            {e.todo}
          </li>
        );
      })}
    </ul>
  );
};
