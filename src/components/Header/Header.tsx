import { IoLogInOutline, IoLogOutOutline, IoCartOutline } from "react-icons/io5"
import * as S from "./styles";
import React from "react";
import { Cart } from "../Cart/Cart";

export const Header: React.FC = () => {

    const [showCart, setShowCart] = React.useState(false);

    const isLogged = true;

    return (
        <S.StyledHeader>
            <S.Wrapper>
                <S.HeaderTitle>MyShop.</S.HeaderTitle>
                <S.ButtonsWrapper>
                    <S.CartButton onClick={() => setShowCart(!showCart)}>
                        Cart
                        <IoCartOutline />    
                    </S.CartButton>
                    <S.AuthButton isLogged={isLogged}>
                        {isLogged ? "Logout" : "Login"}
                        {isLogged ? <IoLogOutOutline /> : <IoLogInOutline />}
                    </S.AuthButton>
                </S.ButtonsWrapper>
            </S.Wrapper>

            <Cart showCart={showCart}/>
        </S.StyledHeader>
    );
};