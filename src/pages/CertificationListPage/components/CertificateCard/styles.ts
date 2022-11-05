import styled from 'styled-components';
import { GlobalTheme } from "@styles/theme";

const IMG_SIZE = '85px';

export const SCertificateCard = styled.div`
  color: ${({ theme }: GlobalTheme) => theme.text};
  background-image: ${({ theme }: GlobalTheme) => `linear-gradient(${theme.background}, ${theme.backgroundDark})`} !important;
  border: 1px solid ${({ theme }: GlobalTheme) => theme.backgroundSecondary};
  box-shadow: 0 0 20px ${({ theme }: GlobalTheme) => theme.shadow};
  height: 140px;
  width: 100%;
  border-radius: 6px;
  display: flex;
  padding: 1rem;
  gap: 2rem;
  transition: 0.2s ease;

  @media (max-width: 600px) {
      gap: 0.8rem;
  }

  &:hover {
    border-color: ${({ theme }: GlobalTheme) => theme.colors.purple};
    cursor: pointer;
    transform: scale(1.01);
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

    footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
    
    .certificate-name {
      width: 100%;
      font-weight: 600 !important;
      font-size: 1rem;
      color: ${({ theme }: GlobalTheme) => theme.text};
    }

    .certificate-subtitle {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 8px;
      width: 100%;
      font-weight: 500 !important;
      font-size: 0.8rem;
      color: ${({ theme }: GlobalTheme) => theme.textSecondary};
    }

    @media (max-width: 600px) {
        padding: 0;

        .certificate-name {
          font-size: 0.9rem;
        }

        .certificate-subtitle { 
          font-size: 0.7rem;
        }
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
    font-size: 0.9rem;
  }

  @media (max-width: 600px) {
      font-size: 0.8rem;
  }
`