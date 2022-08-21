import LHeader from "@components/LHeader";
import { ReactNode } from "react"
import { SBodyContainer } from "./styles";

interface Props {
    children: ReactNode;
    hideHeader?: boolean;
}

export default function LBody({
    children,
    hideHeader = false
}: Props){
    return (
        <SBodyContainer>
            {!hideHeader && <LHeader />}
            {
                children
            }
        </SBodyContainer>
    )
};