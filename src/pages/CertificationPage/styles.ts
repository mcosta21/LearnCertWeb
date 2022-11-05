import { Fab } from "@mui/material";
import { GlobalTheme } from "@styles/theme";
import styled, { keyframes } from "styled-components";
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

export const SNavigateTopFab = styled(Fab)`
    position: absolute !important;
    bottom: 1.5rem;
    right: 1.5rem;
    width: 45px !important;
    height: 45px !important;
    background-color: ${({ theme }: GlobalTheme) => theme.colors.purple} !important;
    animation: 1s ${fadeInAnimation};
`