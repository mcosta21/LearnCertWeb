import { GlobalTheme } from '@styles/theme';
import styled from 'styled-components';

export const STabsContainer = styled.div`
    & .l-tab {
        color: ${({ theme }: GlobalTheme) => theme.text} !important
    }

    & .invalid {
        color: ${({ theme }: GlobalTheme) => theme.colors.red} !important;
    }
`;
