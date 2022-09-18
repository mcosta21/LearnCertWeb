import styled from 'styled-components';
import { GlobalTheme } from '@styles/theme';

export const SCertificationForm = styled.form`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 4rem;
`

export const SCertificationInputs = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;

    & > div {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 10px;

        .l-select {
            grid-column: 1 / -1;
        }
    }

    & > img {
        width: 160px;
        height: 160px;
    }
`

export const SPopoverModule = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const SModuleTabsContainer = styled.div`
    height: calc(100vh - 265px);

    & > label {
        display: block;
        padding-bottom: 10px;
        margin-top: 10px;
        border-bottom: 1px solid ${({ theme }: GlobalTheme) => theme.border};
    }

    & .module-tab {
        height: calc(100vh - 350px);
        overflow-y: overlay;
    }
`
export const SCertificationFooter = styled.footer`
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;

    button {
        width: 140px;
    }
`