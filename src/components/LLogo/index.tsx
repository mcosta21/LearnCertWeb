import { useMyTheme } from "@hooks/useMyTheme";
import { SContainer } from "./style";

interface Props {
    type?: 'logo' | 'icon';
    size?: number;
}

export default function LLogo({
    type = 'logo',
    size = 40,
}: Props) {

    const { themeName } = useMyTheme();

    return (
        <SContainer>
            {
                type === 'logo' ? (
                    <img 
                        src={themeName === 'light' ? '/images/logo-purple.png' : '/images/logo-white.png'} 
                        style={{ height: size }}
                    />
                ) : (
                    <img 
                        src={themeName === 'light' ? '/images/logo-icon-purple.png' : '/images/logo-icon-white.png'}
                        style={{ height: size * 2 }}
                    />
                )
            }
        </SContainer>
    )
}