import styled from "styled-components";

export const Card = styled.article`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid #e5e5e5;
    border-radius: 0.5rem;
    width: 100%;
    max-width: 300px;
`

export const ProductImage = styled.img`
    width: 90%;
    height: 300px;
    object-fit: cover;
    border-radius: 0.5rem;
`

export const ProductTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
`

export const ReviewPriceWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Review = styled.span`
    font-size: 1.25rem;
    font-weight: 600;
`

export const Price = styled.strong`
    font-size: 1.25rem;
    font-weight: 600;
    color: #007185;
`

export const AddToCartButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: #007185;
    color: white;
    font-size: 1.25rem;
    font-weight: 600;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #00595f;
    }
`