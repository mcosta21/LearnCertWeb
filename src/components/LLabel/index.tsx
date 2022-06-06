import { SLabel } from "./styles"

interface Props {
    value?: string;
    hidden?: boolean;
}

export function LLabel({ value, hidden = false }: Props){
    return <SLabel hidden={hidden}>{value}</SLabel>
}