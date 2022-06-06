import styled from 'styled-components';
import { GlobalTheme } from 'styles/theme';

export const SPopoverModule = styled.div`
    padding: 10px;
`;

export const SModuleTabsContainer = styled.div`
    height: calc(100vh - 350px);

    & > label {
        display: block;
        padding-bottom: 15px;
        border-bottom: 1px solid ${({ theme }: GlobalTheme) => theme.border};
    }
`
