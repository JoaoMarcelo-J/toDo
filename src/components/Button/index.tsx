import * as S from "./styles";
import { BsPlusCircle } from "react-icons/bs";

interface ButtonProps {
  onClick: () => void;
}

export default function Button({ onClick }: ButtonProps) {
  return (
    <S.ButtonContainer>
      <button onClick={onClick}>
        Criar
        <BsPlusCircle size={16} />
      </button>
    </S.ButtonContainer>
  );
}
