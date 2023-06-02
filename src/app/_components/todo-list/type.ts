export type TodoListType = {
  todos: [
    {
      id: number;
      todo: string;
      completed: boolean;
      userId: string;
    }
  ];
};
