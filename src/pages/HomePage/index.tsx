import { useMyTheme } from "@hooks/useMyTheme";
import { useTranslation } from "react-i18next";
import Translate from "@services/i18nProvider/Translate";
import CertificationListPage from "@pages/CertificationListPage";

export default function HomePage(){
    return <CertificationListPage />
}