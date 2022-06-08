import styled from 'styled-components';
import { GlobalTheme } from 'styles/theme';

export const SCertificationForm = styled.form`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const SCertificationInputs = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;

    & > div {
        width: 100%
    }
`

export const SPopoverModule = styled.div`
    padding: 10px;
    display: flex;
    align-items: flex-end;
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

    button {
        width: 140px;
    }
`