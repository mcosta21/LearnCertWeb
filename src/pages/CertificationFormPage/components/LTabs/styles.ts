import { GlobalTheme } from 'styles/theme';
import styled from 'styled-components';

export const STabsContainer = styled.div`

    & .invalid {
        color: ${({ theme }: GlobalTheme) => theme.colors.red} !important;
    }
`;
