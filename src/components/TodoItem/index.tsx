import { useState } from "react";

//Components
import Modal from "react-modal";

//Styles
import * as S from "./styles";
import { customStyles } from "./styles";

//Images
import { HiOutlinePencil } from "react-icons/hi";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

interface TodoItemProps {
  checked: boolean;
  title: string;
  priority: string;
  onChange: () => void;
  onDelete: () => void;
  onEdit: () => void;
  editTaskInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TodoItem({
  checked,
  onChange,
  title,
  onDelete,
  editTaskInput,
  onEdit,
  priority,
}: TodoItemProps) {
  const [modalIsOpen, setIsOpen] = useState(false);

  const priorityText = (priority: string) => {
    return {
      "1": "Alta",
      "2": "Baixa",
      "3": "Média",
    }[priority];
  };

  const handleClickToEditTask = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleEditTask = () => {
    onEdit();
    setIsOpen(false);
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
        <S.EditWrapper onClick={handleClickToEditTask}>
          <HiOutlinePencil />
        </S.EditWrapper>
        <S.DeleteWrapper onClick={onDelete}>
          <BsTrash />
        </S.DeleteWrapper>
      </S.PriorityContainer>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <S.ModalWrapper>
          <AiOutlineClose onClick={handleCloseModal} color="var(--gray-200)" />

          <S.InputsModalContainer>
            <input
              placeholder="Digite o novo nome da tarefa"
              type="text"
              onChange={editTaskInput}
            />
            <button onClick={handleEditTask}>Editar</button>
          </S.InputsModalContainer>
        </S.ModalWrapper>
      </Modal>
    </S.TodoItemContainer>
  );
}
