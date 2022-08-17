import Translate from "@services/i18nProvider/Translate";
import { SLabel } from "./styles"

interface Props {
    value?: string;
    hidden?: boolean;
}

export function LLabel({ value, hidden = false }: Props){
    return <SLabel hidden={hidden}>
                {value ? <Translate value={value} /> : value }
            </SLabel>
}