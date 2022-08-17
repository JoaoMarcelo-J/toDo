//Styles
import * as S from "./styles";

//Images
import Logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <S.HeaderContainer>
      <div>
        <img src={Logo} alt="logo" />
      </div>
    </S.HeaderContainer>
  );
};
