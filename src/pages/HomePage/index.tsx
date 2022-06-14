import { useMyTheme } from "@hooks/useMyTheme";

export default function HomePage(){
    const { toggleTheme } = useMyTheme();
    return (
            <div>
                Home
                <button onClick={toggleTheme}>Mudar tema</button>
            </div>)
}