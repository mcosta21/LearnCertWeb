import { GlobalTheme } from "@styles/theme";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SLink = styled(Link)`
    text-decoration: none;

    h3 {
        color: ${({ theme }: GlobalTheme) => theme.text};
        transition: 0.3s;
    }

    span {
        font-size: 0.8rem;
        color: ${({ theme }: GlobalTheme) => theme.textSecondary};
        opacity: 0.8;
    }
    
    h3:hover {
        color: ${({ theme }: GlobalTheme) => theme.colors.purple} !important;
    }
`
