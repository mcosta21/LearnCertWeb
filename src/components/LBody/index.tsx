import LHeader from "@components/LHeader";
import { ReactNode } from "react"
import { SBodyContainer } from "./styles";

interface Props {
    children: ReactNode;
}

export default function LBody({
    children
}: Props){
    return (
        <SBodyContainer>
            <LHeader />
            {
                children
            }
        </SBodyContainer>
    )
};