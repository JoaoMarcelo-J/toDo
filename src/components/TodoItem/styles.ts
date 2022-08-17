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
    align-self: center;
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
    margin-bottom: -5px;
    width: 20px;
    height: 20px;
    outline: none;
    -webkit-appearance: none;
    border-radius: 999px;
    background-color: var(--gray-500);
    border: 2px solid var(--brand-blue);

    transition: all 0.2s;

    &:hover {
      background-color: var(--brand-blue-dark);
    }
  }

  input:checked[type="checkbox"] {
    background-color: var(--brand-purple-dark);
    border: 2px solid var(--brand-purple-dark);

    &:hover {
      background-color: var(--brand-purple);
      border: 2px solid var(--brand-purple);
    }

    & ~ svg {
      display: block;
      color: white;
      position: absolute;
      top: 4px;
      right: 4px;
    }
  }
`;

export const PriorityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const PRIORITY_COLORS = {
  yellow: "yellow-500",
  green: "green-500",
  red: "red-500",
} as const;

interface PriorityProps {
  priority: keyof typeof PRIORITY_COLORS;
}

export const PriorityText = styled.p<PriorityProps>`
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 1rem;

  &::after {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) =>
      props.priority ? `var(--${PRIORITY_COLORS[props.priority]})` : ""};
  }
`;

export const ButtonWrapper = styled.div`
  padding: 4px;
  border-radius: 8px;
`;

export const DeleteWrapper = styled(ButtonWrapper)`
  &:hover {
    background-color: var(--gray-400);

    svg {
      color: var(--danger);
    }
  }
`;

export const EditWrapper = styled(ButtonWrapper)`
  &:hover {
    background-color: var(--gray-400);

    svg {
      color: var(--brand-blue);
    }
  }
`;

export const ModalWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  color: white;
  position: relative;

  svg {
    color: var(--gray-200);
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;

    &:hover {
      transform: scale(1.4);
    }
  }
`;

export const InputsModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 20px;

  button {
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    background-color: var(--brand-blue);
    color: var(--gray-100);
  }

  input {
    background-color: var(--gray-400);
    border: none;
    padding: 8px 20px;
    border-radius: 8px;
    color: var(--gray-100);
  }
`;

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    border: "1px solid #ccc",
    background: "var(--gray-500)",
    borderRadius: "4px",
    outline: "none",
    padding: "1rem",
    height: "220px",
    width: "450 px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(31, 31, 31, 0.75)",
  },
};
