import React from "react";
import * as S from "./styles";

interface CartProps {
    showCart: boolean;
}

export const Cart: React.FC<CartProps> = ({showCart}) => {
    return (
        <S.Container showCart={showCart}>
            <S.CartTitle>Cart</S.CartTitle>
        </S.Container>
    );
};