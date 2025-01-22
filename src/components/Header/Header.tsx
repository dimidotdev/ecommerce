import * as S from "./styles";

export const Header: React.FC = () => {
    return (
        <S.StyledHeader>
            <S.Wrapper>
                <S.HeaderTitle>My Shop.</S.HeaderTitle>
                <S.ButtonsWrapper>
                    <S.AuthButton>Sign In</S.AuthButton>
                    <S.CartButton>Cart</S.CartButton>
                </S.ButtonsWrapper>
            </S.Wrapper>
        </S.StyledHeader>
    );
};