import { IoLogInOutline, IoLogOutOutline, IoCartOutline } from "react-icons/io5"
import * as S from "./styles";

export const Header: React.FC = () => {

    const isLogged = true;

    return (
        <S.StyledHeader>
            <S.Wrapper>
                <S.HeaderTitle>MyShop.</S.HeaderTitle>
                <S.ButtonsWrapper>
                    <S.CartButton>
                        Cart
                        <IoCartOutline />    
                    </S.CartButton>
                    <S.AuthButton isLogged={isLogged}>
                        {isLogged ? "Logout" : "Login"}
                        {isLogged ? <IoLogOutOutline /> : <IoLogInOutline />}
                    </S.AuthButton>
                </S.ButtonsWrapper>
            </S.Wrapper>
        </S.StyledHeader>
    );
};