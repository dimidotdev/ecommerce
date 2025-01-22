import { IoLogInOutline, IoCartOutline } from "react-icons/io5"
import * as S from "./styles";

export const Header: React.FC = () => {
    return (
        <S.StyledHeader>
            <S.Wrapper>
                <S.HeaderTitle>MyShop.</S.HeaderTitle>
                <S.ButtonsWrapper>
                    <S.CartButton>
                        Cart
                        <IoCartOutline />    
                    </S.CartButton>
                    <S.AuthButton>
                        Sign In
                        <IoLogInOutline />
                    </S.AuthButton>
                </S.ButtonsWrapper>
            </S.Wrapper>
        </S.StyledHeader>
    );
};