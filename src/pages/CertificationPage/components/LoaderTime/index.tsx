import { Certification } from '@pages/CertificationFormPage/domain/certification.model';
import { useTranslation } from 'react-i18next';

import { SContainer, SLoader, SLoaderContainer } from './styles';

interface Props {
  timer: number;
  message: string;
}

export default function LoaderTime({ timer, message }: Props) {
  const { t } = useTranslation();

  return (
    <SContainer>
      <SLoaderContainer>
          <SLoader>
            <span>
            </span>
          </SLoader>
          <h1 className="timer">{timer}</h1>
      </SLoaderContainer>
        <h5>{t(message)}</h5>
    </SContainer>
  );
}
