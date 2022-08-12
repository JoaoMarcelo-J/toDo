import styled from "styled-components";

export const TodoItemContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--gray-500);
  border: 1px solid var(--gray-400);
  border-radius: 8px;

  p {
    max-width: 630px;
  }

  svg {
    display: none;
  }

  div > svg {
    display: block;
    color: var(--gray-300);
    align-self: flex-start;
    cursor: pointer;
  }
`;

interface TodoItemProps {
  completed: boolean;
}

export const TodoText = styled.p<TodoItemProps>`
  font-size: 14px;
  color: ${(props) =>
    props.completed ? "var(--gray-300)" : "var(--gray-200)"};
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  gap: 1rem;

  label {
    position: relative;
  }

  input[type="checkbox"] {
    position: relative;
    width: 20px;
    height: 20px;
    outline: none;
    -webkit-appearance: none;
    border-radius: 999px;
    background-color: var(--gray-500);
    border: 2px solid var(--brand-blue);
  }

  input:checked[type="checkbox"] {
    background-color: var(--brand-purple-dark);
    border: 2px solid var(--brand-purple-dark);

    & ~ svg {
      display: block;
      color: white;
      position: absolute;
      top: 4px;
      right: 4px;
    }
  }
`;
