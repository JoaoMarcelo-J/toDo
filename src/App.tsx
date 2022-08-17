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
  const [editInput, setEditInput] = useState("");
  const [todoTitleFilter, setTodoTitleFilter] = useState("");
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

  const handleEditTask = (id: number) => {
    const updatedTodoItems = todoItems.map((todoItem) => {
      if (todoItem.id === id) {
        todoItem.title = editInput;
      }
      return todoItem;
    });

    setTodoItems(updatedTodoItems);
    saveToLocalStorage(updatedTodoItems);
  };

  const editTaskInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setEditInput(ev.target.value);
  };

  const handleFilter = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitleFilter(ev.target.value);

    const filteredTodoItems = todoItems.filter((todoItem) =>
      todoItem.title.toLowerCase().includes(ev.target.value.toLowerCase())
    );

    setTodoItems(filteredTodoItems);

    if (ev.target.value === "") {
      const todoItems = localStorage.getItem("todoItems")
        ? JSON.parse(localStorage.getItem("todoItems")!)
        : [];
      setTodoItems(todoItems);
    }
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

          <input
            type="text"
            placeholder="Digite o nome da busca"
            value={todoTitleFilter}
            onChange={handleFilter}
          />

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
                onEdit={() => handleEditTask(todoItem.id)}
                checked={todoItem.isCompleted}
                title={todoItem.title}
                priority={todoItem.priority}
                editTaskInput={editTaskInput}
              />
            ))
          )}
        </S.TodoContainer>
      </S.Wrapper>
    </S.HomeContainer>
  );
}

export default App;
