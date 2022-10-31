import { Avatar } from "@mui/material";
import { SContainer } from "./styles";

interface Props {
    alt?: string;
    src?: string;
    size?: number;
}

export default function LAvatar({
    alt,
    src,
    size = 38
}: Props) {
    return (
        <SContainer>
            <Avatar 
                alt={alt} 
                src={src} 
                sx={{ width: size, height: size }}
            />
        </SContainer>
    )
}