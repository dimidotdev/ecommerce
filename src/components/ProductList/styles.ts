import styled from "styled-components";

export const Container = styled.div`
    max-width: 1240px;
    padding: 0 2rem;
    margin: 4rem auto;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 2rem;
    flex-wrap: wrap;

    & > * {
        flex: 1 300px;
    }
`

