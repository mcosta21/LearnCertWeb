import LHeader from "@components/LHeader";
import LLoading from "@components/LLoading";
import { ReactNode } from "react"
import { SBodyContainer } from "./styles";

interface Props {
    children: ReactNode;
    hideHeader?: boolean;
    loading?: boolean;
}

export default function LBody({
    children,
    hideHeader = false,
    loading = false
}: Props){
    return (
        <SBodyContainer>
            {!hideHeader && <LHeader />}
            <section>
                {
                    !loading && children
                }
                {
                    loading && <LLoading />
                }
            </section>
            
        </SBodyContainer>
    )
};