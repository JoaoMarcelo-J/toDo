import * as S from "./styles";
import { BsTrash } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

interface TodoItemProps {
  checked: boolean;
  title: string;
  onChange: () => void;
  onDelete: () => void;
}

export default function TodoItem({
  checked,
  onChange,
  title,
  onDelete,
}: TodoItemProps) {
  return (
    <S.TodoItemContainer>
      <S.CheckBoxContainer>
        <label>
          <input type="checkbox" onChange={onChange} />
          <AiOutlineCheck size="12px" />
        </label>
        <S.TodoText completed={checked}>{title}</S.TodoText>
      </S.CheckBoxContainer>
      <S.ButtonWrapper onClick={onDelete}>
        <BsTrash />
      </S.ButtonWrapper>
    </S.TodoItemContainer>
  );
}
