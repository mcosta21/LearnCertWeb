import { useTranslation } from 'react-i18next';

interface TranslateProps {
  value: string;
}

export default function Translate({ value }: TranslateProps) {
  const { t } = useTranslation();
  return <>{t(value)}</>;
}
