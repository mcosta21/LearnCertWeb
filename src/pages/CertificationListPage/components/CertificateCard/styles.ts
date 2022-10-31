import styled from 'styled-components';
import { GlobalTheme } from "@styles/theme";

const IMG_SIZE = "95px";

export const SCertificateCard = styled.div`
  color: ${({ theme }: GlobalTheme) => theme.text};
  background-image: ${({ theme }: GlobalTheme) => `linear-gradient(${theme.background}, ${theme.backgroundDark})`} !important;
  border: 1px solid ${({ theme }: GlobalTheme) => theme.backgroundSecondary};
  box-shadow: 0 0 20px ${({ theme }: GlobalTheme) => theme.shadow};
  height: 140px;
  width: 100%;
  border-radius: 6px;
  display: flex;
  padding: 20px;
  gap: 30px;
  transition: 0.2s ease;

  &:hover {
    border-color: ${({ theme }: GlobalTheme) => theme.colors.purple};
    cursor: pointer;
    transform: scale(1.03);
  }
  
  .certificate-img {
    height: 100%;
    width: ${IMG_SIZE};
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
      max-width: ${IMG_SIZE};
    }
  }
  
  .certificate-info-container {
    display: flex;
    flex-direction: column;
    width: calc(100% - ${IMG_SIZE});
    height: 100%;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 0.5rem;
    padding-bottom: 0.2rem;

    aside {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    
    .certificate-name {
      width: 100%;
      font-weight: 600 !important;
      font-size: 16px;
      color: ${({ theme }: GlobalTheme) => theme.text};
    }

    .certificate-subtitle {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 8px;
      width: 100%;
      font-weight: 500 !important;
      font-size: 12px;
      color: ${({ theme }: GlobalTheme) => theme.textSecondary};
    }
  }

`;

export const SOptionsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
  justify-content: center;

  .quiz-executed {
    height: 25px;
    margin-right: 4px;
    font-size: 14px;
  }
`