import { SButton } from "./styles";

interface Props {
    text: string
    onClick?: () => void;
    hidden?: boolean;
}

export default function LButtonOutlined({
    text,
    hidden = false,
    onClick
}: Props){
    return (
        <SButton style={{ display: hidden ? 'none' : 'block' }} variant="outlined" onClick={onClick}>
            {text}
        </SButton>
    )
}