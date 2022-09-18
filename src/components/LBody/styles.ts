import styled from 'styled-components';

export const SBodyContainer = styled.main`
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > section {
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }
`

