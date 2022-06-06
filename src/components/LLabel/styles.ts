import { GlobalTheme } from './../../styles/theme';
import styled from 'styled-components';

export const SLabel = styled.label`
    font-size: 0.9rem;
    color: ${({ theme }: GlobalTheme) => theme.text};
`;
