import styled from 'styled-components';
import { GlobalTheme } from "@styles/theme";

export const CertificateTitleHeight = "200px";

export const SCertificateListTitle = styled.span`
  height: ${CertificateTitleHeight};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }: GlobalTheme) => theme.colors.white};
  font-size: 26px;
  font-weight: 600 !important;
`;

