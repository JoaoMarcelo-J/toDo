import { useState } from "react";
import Button from "./components/Button";
import { Header } from "./components/Header";
import { TodoInputContainer } from "./components/TodoInput/styles";
import TodoItem from "./components/TodoItem";
import * as S from "./styles/home";

type TodoItemType = {
  id: number;
  title: string;
  isCompleted: boolean;
};

function App() {
  const [todoItems, setTodoItems] = useState<TodoItemType[]>([]);
  const [completedItems, setCompletedItems] = useState<TodoItemType[]>([]);
  const [todoInput, setTodoInput] = useState("");

  const handleCreateTask = () => {
    const newTodoItem = {
      id: todoItems.length + 1,
      title: todoInput,
      isCompleted: false,
    };

    const updatedTodoItems = [...todoItems, newTodoItem];
    setTodoItems(updatedTodoItems);
    setTodoInput("");
  };

  const handleFinishTask = (id: number) => {
    const updatedTodoItems = todoItems.map((todoItem) => {
      if (todoItem.id === id) {
        !todoItem.isCompleted
          ? (todoItem.isCompleted = true)
          : (todoItem.isCompleted = false);
      }
      return todoItem;
    });

    const completedTodoItem = todoItems.filter(
      (item) => item.isCompleted === true
    );

    setCompletedItems(completedTodoItem);

    setTodoItems(updatedTodoItems);
  };

  const handleDeleteTask = (id: number) => {
    const updatedTodoItems = todoItems.filter((todoItem) => todoItem.id !== id);
    setTodoItems(updatedTodoItems);

    const completedTodoItem = completedItems.filter((item) => item.id !== id);
    setCompletedItems(completedTodoItem);
  };

  return (
    <S.HomeContainer>
      <Header />
      <S.Wrapper>
        <S.InputsContainer>
          <TodoInputContainer>
            <input
              type="text"
              placeholder="Adicione uma nova tarefa"
              value={todoInput}
              onChange={(ev) => setTodoInput(ev.target.value)}
            />
          </TodoInputContainer>
          <Button onClick={handleCreateTask} />
        </S.InputsContainer>
        <S.TodosHeader>
          <span>
            Trefas criadas <h4>{todoItems.length}</h4>
          </span>
          <strong>
            Concluídas{" "}
            <h4>
              {completedItems.length} de {todoItems.length}
            </h4>
          </strong>
        </S.TodosHeader>
        <S.TodoContainer>
          {todoItems.map((todoItem) => (
            <TodoItem
              key={todoItem.id}
              onChange={() => handleFinishTask(todoItem.id)}
              onDelete={() => handleDeleteTask(todoItem.id)}
              checked={todoItem.isCompleted}
              title={todoItem.title}
            />
          ))}
        </S.TodoContainer>
      </S.Wrapper>
    </S.HomeContainer>
  );
}

export default App;
