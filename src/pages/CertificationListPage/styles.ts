import { MenuItem } from '@mui/material';
import styled from "styled-components";
import { GlobalTheme } from "@styles/theme";

export const SCertificationListContainer = styled.div`
    width: 100%;
    margin: auto;
    max-width: 1366px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    padding-bottom: 1rem !important;
    padding: 1.5rem;
    
    .filters-container {
        display: flex;
        width: 100%;
        gap: 20px;
        justify-content: center;
        
    }
  
    .certificates-container {
        width: 100%;
        height: 100%;
        display: grid;
        gap: 20px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 140px auto;
        justify-content: center;
    }

    @media (max-width: 800px) {

        .filters-container {
            flex-direction: column;
            gap: 0;

            div {
                width: 100%;
            }
        }

        .certificates-container {
            margin-top: 1rem;
        }
    }

    @media (max-width: 1366px) {

        .certificates-container {
            grid-template-columns: 1fr;
        }
    }

`;

export const SCertificateListTitle = styled.h2`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }: GlobalTheme) => theme.text};
  font-weight: 600;
`;


export const SLanguageTypeOption = styled.div`
    display: flex;
    align-items: center;

    img {
        border-radius: 50px;
        height: 25px;
        margin-right: 12px;
    }
`