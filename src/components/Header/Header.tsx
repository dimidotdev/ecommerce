import { IoLogInOutline, IoLogOutOutline, IoCartOutline } from "react-icons/io5"
import * as S from "./styles";
import React from "react";
import { Cart } from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";

export const Header: React.FC = () => {

    const { user } = useSelector((rootReducer: RootReducer) => rootReducer.userReducer);

    const [showCart, setShowCart] = React.useState(false);

    const isLogged = user !== null;

    const dispatch = useDispatch();

    const handleUserAuth = () => {
        if (user === null) {
            dispatch({ type: "user/login", payload: { name: "Matheus Silva", email: "dimi@email.com" } });
        } else {
            dispatch({ type: "user/logout" });
        }
    };

    return (
        <S.StyledHeader>
            <S.Wrapper>
                <S.HeaderTitle>MyShop.</S.HeaderTitle>
                <S.ButtonsWrapper>
                    <S.CartButton onClick={() => setShowCart(!showCart)}>
                        Cart
                        <IoCartOutline />    
                    </S.CartButton>
                    <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
                        {isLogged ? "Logout" : "Login"}
                        {isLogged ? <IoLogOutOutline /> : <IoLogInOutline />}
                    </S.AuthButton>
                </S.ButtonsWrapper>
            </S.Wrapper>

            <Cart showCart={showCart}/>
        </S.StyledHeader>
    );
};