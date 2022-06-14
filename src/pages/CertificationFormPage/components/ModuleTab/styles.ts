import styled from 'styled-components';
import { GlobalTheme } from '@styles/theme';

export const SModuleTabContainer = styled.section`
    padding: 20px;
    background: ${({ theme }: GlobalTheme) => theme.backgroundSecondary};
`;

export const SQuestionContainer = styled.ul`
    margin-bottom: 1rem;
    
    li + li {
        margin-top: 1rem;
    }
`
