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
`

export const CartTitle = styled.h2`

`