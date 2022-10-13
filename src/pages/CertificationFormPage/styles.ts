import styled from 'styled-components';
import { GlobalTheme } from '@styles/theme';

export const SCertificationForm = styled.form`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    padding: 0 4rem;
`

export const SCertificationInputs = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;

    & > div {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 10px;
    }

    & > img {
        width: 75px;
        height: 75px;
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
    min-height: calc(100vh - 275px);


    & .module-tab {
        height: calc(100vh - 332px);
        overflow-y: overlay;
    }

    & > .module-header {
        padding: 0;
        padding-bottom: 4px;
        border-bottom: 1px solid ${({ theme }: GlobalTheme) => theme.border};
    } 

    &.full-screen-module {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 1;
        background-color: ${({ theme }: GlobalTheme) => theme.background};
        
        & > .module-header {
            border-bottom: 0;
            padding: 0.5rem 1rem;
        }

        & .module-tab {
            height: calc(100vh - 105px);
        }
    }
`

export const SModuleHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    & > label {
        display: block;
        padding-bottom: 10px;
        margin-top: 10px;
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