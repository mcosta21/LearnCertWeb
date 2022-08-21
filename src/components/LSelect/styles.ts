import { GlobalTheme } from '@styles/theme';
import styled from 'styled-components';

export const SSelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;

    label {
        font-size: 0.8rem;
        color: ${({ theme }: GlobalTheme) => theme.text};
    }

    & > div {
        height: 40px;
        line-height: 40px;
        border: 1px solid ${({ theme }: GlobalTheme) => theme.border};
        color: ${({ theme }: GlobalTheme) => theme.text};

        & > div {
            padding: 0 14px;
        }

        &:hover, &:focus {
            border-color: ${({ theme }: GlobalTheme) => theme.colors.purple};
        }

        & fieldset {
            border: none;
        }
    }

    & svg {
        color: ${({ theme }: GlobalTheme) => theme.text};
    }

    > span {
        font-size: 0.7rem;
        color: ${({ theme }: GlobalTheme) => theme.colors.red};
        display: block;
        width: 100%;
        height: 1.3rem;
    }
`;
