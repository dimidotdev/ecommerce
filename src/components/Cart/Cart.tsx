import React from "react";
import * as S from "./styles";
import { RootReducer } from "../../redux/root-reducer";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../redux/CartReducer/cart-slice";

interface CartProps {
    showCart: boolean;
}

export const Cart: React.FC<CartProps> = ({showCart}) => {

    const { cart } = useSelector((state: RootReducer) => state.cartReducer);

    const dispatch = useDispatch();

    return (
        <S.Container showCart={showCart}>
            <S.CartTitle>Cart</S.CartTitle>
            <S.CartItems>
                {cart.map(item => (
                    <S.CartItem key={item.id}>
                        {item.title} - {item.price}
                        <S.RemoveButton onClick={() => dispatch(removeProduct(item))}>Remove</S.RemoveButton>
                    </S.CartItem>
                ))}
            </S.CartItems>
            <S.CartTotalAmount>
                Total: ${cart.reduce((total, item) => total + item.price, 0)}
            </S.CartTotalAmount>
        </S.Container>
    );
};