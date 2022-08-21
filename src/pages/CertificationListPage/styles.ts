import { MenuItem } from '@mui/material';
import styled from "styled-components";
import { GlobalTheme } from "@styles/theme";

const COLUMN_GRID_WIDTH = '500px';
const GRID_GAP = '20px';

export const SCertificationListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${GRID_GAP};
    justify-content: center;
    padding-bottom: 1rem;
    
    .filters-container {
        display: flex;
        width: 100%;
        gap: ${GRID_GAP};
        justify-content: center;
        
        div {
            width: 500px;
        }
    }
  
    .certificates-container {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: ${COLUMN_GRID_WIDTH} ${COLUMN_GRID_WIDTH};
        grid-template-rows: 140px auto;
        column-gap: ${GRID_GAP};
        row-gap: ${GRID_GAP};
        justify-content: center;
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
export const LanguageSelectStyle = {
    background: "purple",
    div: {
        background: "red"
    }
}
