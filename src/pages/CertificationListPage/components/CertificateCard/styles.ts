import styled from 'styled-components';
import { GlobalTheme } from "@styles/theme";
import { Link } from 'react-router-dom';

const IMG_SIZE = "95px";

export const SCertificateCard = styled.div`
  color: ${({ theme }: GlobalTheme) => theme.text};
  background-color: ${({ theme }: GlobalTheme) => theme.backgroundSecondary};
  border: 1px solid ${({ theme }: GlobalTheme) => theme.border};
  height: 140px;
  width: 100%;
  border-radius: 3px;
  display: flex;
  padding: 20px;
  gap: 30px;
  transition: 0.2s ease;

  &:hover {
    border-color: ${({ theme }: GlobalTheme) => theme.colors.purple};
    cursor: pointer;
  }
  
  .certificate-img {
    height: 100%;
    width: ${IMG_SIZE};
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
      height: ${IMG_SIZE};
      width: ${IMG_SIZE};
    }
  }
  
  .certificate-info-container {
    display: flex;
    flex-direction: column;
    width: calc(100% - ${IMG_SIZE});
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

export const SOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-direction: column;

  img {
    border-radius: 50px;
    height: 35px;
  }
`