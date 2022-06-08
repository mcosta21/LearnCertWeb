import styled from 'styled-components';
import { GlobalTheme } from 'styles/theme';

export const SButtonContainer = styled.button`
    background: ${({ theme }: GlobalTheme) => theme.backgroundSecondary};
    color: ${({ theme }: GlobalTheme) => theme.text};
    border: 2px dashed ${({ theme }: GlobalTheme) => theme.border};
    cursor: pointer;
    transition: 0.3s all ease;

    &:hover {
        background: ${({ theme }: GlobalTheme) => theme.background};
        border-color: ${({ theme }: GlobalTheme) => theme.colors.purple};
    }
`
