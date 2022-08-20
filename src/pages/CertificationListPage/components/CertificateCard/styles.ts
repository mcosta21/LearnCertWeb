import styled from 'styled-components';
import { GlobalTheme } from "@styles/theme";

const imgContainerWidth = "95px";
const imgSize = imgContainerWidth;

export const SCertificateCard = styled.div`
  height: 140px;
  min-height: 80px;
  width: 500px;
  border: 1px solid ${({ theme }: GlobalTheme) => theme.border};
  border-radius: 3px;
  display: flex;
  box-sizing: border-box;
  padding: 20px;
  gap: 30px;
  color: ${({ theme }: GlobalTheme) => theme.text};
  transition: 0.2s ease;
  user-select: none;

  &:hover, &:focus {
    border-color: ${({ theme }: GlobalTheme) => theme.colors.purple};
    cursor: pointer;
  }
  
  &:active {
    background-color: ${({ theme }: GlobalTheme) => theme.colors.purple};
    position: relative;
    top: 2px;
  }
  
  .certificate-img {
    height: 100%;
    width: ${imgContainerWidth};
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
      height: ${imgSize};
      width: ${imgSize};
    }
  }
  
  .certificate-info-container {
    display: flex;
    flex-direction: column;
    width: calc(100% - ${imgContainerWidth});
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: 5px;
    
    .certificate-name {
      width: 100%;
      font-weight: 600 !important;
      font-size: 16px;
      color: ${({ theme }: GlobalTheme) => theme.text};
      
    }

    .certificate-questions {
      width: 100%;
      font-weight: 500 !important;
      font-size: 11px;
      color: ${({ theme }: GlobalTheme) => theme.textSecondary};
    }
  }

`;