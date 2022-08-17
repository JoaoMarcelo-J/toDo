import * as S from "./styles";
import { BsTrash } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

interface TodoItemProps {
  checked: boolean;
  title: string;
  priority: string;
  onChange: () => void;
  onDelete: () => void;
}

export default function TodoItem({
  checked,
  onChange,
  title,
  onDelete,
  priority,
}: TodoItemProps) {
  const priorityText = (priority: string) => {
    return {
      "1": "Alta",
      "2": "Baixa",
      "3": "Média",
    }[priority];
  };

  return (
    <S.TodoItemContainer>
      <S.CheckBoxContainer>
        <label>
          <input type="checkbox" onChange={onChange} />
          <AiOutlineCheck size="12px" />
        </label>
        <S.TodoText completed={checked}>{title}</S.TodoText>
      </S.CheckBoxContainer>
      <S.PriorityContainer>
        {priority === "1" && (
          <S.PriorityText priority="red">
            {priorityText(priority)}
          </S.PriorityText>
        )}
        {priority === "2" && (
          <S.PriorityText priority="green">
            {priorityText(priority)}
          </S.PriorityText>
        )}
        {priority === "3" && (
          <S.PriorityText priority="yellow">
            {priorityText(priority)}
          </S.PriorityText>
        )}
        <S.ButtonWrapper onClick={onDelete}>
          <BsTrash />
        </S.ButtonWrapper>
      </S.PriorityContainer>
    </S.TodoItemContainer>
  );
}
