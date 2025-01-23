import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: navy;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    max-width: 1240px;
    margin: 0 auto;
    height: 60px;
`

export const HeaderTitle = styled.h1`
    color: white;
    font-size: 1.5rem;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`
interface AuthButtonProps {
    isLogged: boolean;
}
export const AuthButton = styled.button<AuthButtonProps>`
    background-color: ${props => props.isLogged ? "transparent" : "white"};
    color: ${props => props.isLogged ? "white" : "navy"};
    border: 1px solid white;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    display: flex;
    align-items: center;
    gap: 0.3rem;

    svg {
        font-size: 1rem;
    }

    &:hover {
        background-color: ${props => props.isLogged ? "rgba(255, 255, 255, 0.1)" : "white"};
    }
`

export const CartButton = styled.button`
    background-color: transparent;
    color: white;
    border: 1px solid white;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    display: flex;
    align-items: center;
    gap: 0.3rem;

    svg {
        font-size: 1rem;
    }

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
`