import styled from "styled-components";

interface ContainerProps {
    showCart: boolean;
}

export const Container = styled.aside<ContainerProps>`
    position: fixed;
    top: 0;
    right: ${props => props.showCart ? "0" : "-300px"};
    width: 300px;
    height: 100vh;
    background-color: white;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    transition: right 0.5s;
    z-index: 1000;
`;

export const CartTitle = styled.h2`

`

export const CartItems = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 1rem;
`

export const CartItem = styled.li`
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    background-color: white;
    color: black;
    font-size: 0.75rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.2s;
`

export const RemoveButton = styled.button`
    background-color: #ff0000;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;
`

export const CartTotalAmount = styled.strong`
    display: block;
    margin-top: 1rem;
    font-size: 1.5rem;
    text-align: right;
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    right: 2rem;
`
