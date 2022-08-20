import styled from "styled-components";
import {CertificateTitleHeight} from "@pages/CertificationListPage/components/CertificateListTitle/styles";

const columnGridWidth = '500px';
const gridGap = '20px';

export const SCertificateListContentContainer = styled.div`
  height: calc(100% - ${CertificateTitleHeight});
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${gridGap};
  justify-content: center;
  
  .filters-container {
    display: flex;
    width: 100%;
    gap: ${gridGap};
    justify-content: center;
    
    div {
      width: 500px;
    }
  }
  
  .certificates-container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: ${columnGridWidth} ${columnGridWidth};
    grid-template-rows: 140px auto;
    column-gap: ${gridGap};
    row-gap: ${gridGap};
    justify-content: center;
  }

`;
  
export const LanguageSelectItemsStyle = {
  flagImage: {
    borderRadius: "50px",
    height: "30px",
    marginRight: "20px",
  }
}; 

export const LanguageSelectStyle = { 
  background: "purple",
  div: {
    background: "red"
  }
}
