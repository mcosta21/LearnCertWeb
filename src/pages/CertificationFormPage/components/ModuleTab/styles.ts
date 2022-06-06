import styled from 'styled-components';
import { GlobalTheme } from 'styles/theme';

export const SModuleTabContainer = styled.div`
    padding: 15px;
    background: ${({ theme }: GlobalTheme) => theme.backgroundSecondary};
`;
