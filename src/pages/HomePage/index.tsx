import { useMyTheme } from "@hooks/useMyTheme";
import { useTranslation } from "react-i18next";
import Translate from "@services/i18nProvider/Translate";

export default function HomePage(){
    const { toggleTheme } = useMyTheme();

    const { i18n } = useTranslation();

    function toggleChangeLanguage(){
        if(i18n.language === 'pt') {
            i18n.changeLanguage('en')
        }
        else {
            i18n.changeLanguage('pt')
        }
    }
    return (
            <div>
                <Translate value="TITLE" />
                <button onClick={toggleTheme}>Mudar tema</button>
                <button onClick={toggleChangeLanguage}>Mudar idioma</button>
            </div>)
}