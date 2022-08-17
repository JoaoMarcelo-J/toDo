import { useState } from "react";
import Button from "./components/Button";
import { Header } from "./components/Header";
import { TodoInputContainer } from "./components/TodoInput/styles";
import TodoItem from "./components/TodoItem";
import ClipBoard from "./assets/clipboard.svg";
import * as S from "./styles/home";

type TodoItemType = {
  id: number;
  title: string;
  isCompleted: boolean;
  priority: string;
};

function App() {
  const [todoItems, setTodoItems] = useState<TodoItemType[]>(
    localStorage.getItem("todoItems")
      ? JSON.parse(localStorage.getItem("todoItems")!)
      : []
  );
  const [priority, setPriority] = useState("");
  const [completedItems, setCompletedItems] = useState<TodoItemType[]>([]);
  const [todoInput, setTodoInput] = useState("");

  const saveToLocalStorage = (items: TodoItemType[]) => {
    localStorage.setItem("todoItems", JSON.stringify(items));
  };

  const deleteToLocalStorages = (items: TodoItemType[]) => {
    localStorage.removeItem("todoItems");
    localStorage.setItem("todoItems", JSON.stringify(items));
  };

  const handleCreateTask = () => {
    if (todoInput.length > 0) {
      const newTodoItem = {
        id: todoItems.length + 1,
        title: todoInput,
        isCompleted: false,
        priority,
      };

      if (!priority) {
        alert("Selecione uma prioridade para a tarefa");
        return;
      }

      const updatedTodoItems = [...todoItems, newTodoItem];
      setTodoItems(updatedTodoItems);
      saveToLocalStorage(updatedTodoItems);
      setTodoInput("");
    }
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

    deleteToLocalStorages(updatedTodoItems);
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
          <select
            value={priority}
            onChange={(ev) => setPriority(ev.target.value)}
          >
            <option value="">Prioridade</option>
            <option value="1">Alta</option>
            <option value="2">Baixa</option>
            <option value="3">Média</option>
          </select>
          <Button onClick={handleCreateTask} />
        </S.InputsContainer>
        <S.TodosHeader>
          <span>
            Trefas criadas <h4>{todoItems.length}</h4>
          </span>
          <strong>
            Concluídas
            <h4>
              {completedItems.length} de {todoItems.length}
            </h4>
          </strong>
        </S.TodosHeader>
        <S.TodoContainer>
          {todoItems.length === 0 ? (
            <S.notTodo>
              <img src={ClipBoard} alt="clipboard" />
              <p>
                <strong>Você ainda não tem tarefas cadastradas</strong> <br />
                Crie tarefas e organize seus itens a fazer
              </p>
            </S.notTodo>
          ) : (
            todoItems.map((todoItem) => (
              <TodoItem
                key={todoItem.id}
                onChange={() => handleFinishTask(todoItem.id)}
                onDelete={() => handleDeleteTask(todoItem.id)}
                checked={todoItem.isCompleted}
                title={todoItem.title}
                priority={todoItem.priority}
              />
            ))
          )}
        </S.TodoContainer>
      </S.Wrapper>
    </S.HomeContainer>
  );
}

export default App;
