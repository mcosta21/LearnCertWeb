import LBody from "@components/LBody";
import { LInput } from "@components/LInput";
import { useEffect, useState } from "react";
import * as api from './services/certification.api';
import { CertificateListTitle } from "@pages/CertificationListPage/components/CertificateListTitle";
import { CertificateCard } from "@pages/CertificationListPage/components/CertificateCard";
import { LanguageSelectItemsStyle, LanguageSelectStyle, SCertificateListContentContainer } from "./styles";
import { CertificationFlat } from "@pages/CertificationListPage/domain/certification-flat.model";
import LSelect from "@components/LSelect";
import {MenuItem, SelectChangeEvent} from "@mui/material";
import { LanguageImagePath, LanguageType, LanguageTypes } from "@pages/models/shared.model";



const CERTIFICATE_LIST: Array<CertificationFlat> = [
    { id:'1a2678e5-1410-6285-4c9c-7040ec6f1c78', title: "Microsoft Azure Fundamentals AZ-901", imgFileName: "default.png", imgAlt:"teste", languageType: LanguageType.Portuguese, countQuestions: 101} as CertificationFlat,
    { id:'2a2678e5-1410-6285-4c9c-7040ec6f1c78', title: "Microsoft Azure Fundamentals AZ-902", imgFileName: "default.png", imgAlt:"teste", languageType: LanguageType.Portuguese, countQuestions: 102} as CertificationFlat,
    { id:'3a2678e5-1410-6285-4c9c-7040ec6f1c78', title: "Microsoft Azure Fundamentals AZ-903", imgFileName: "default.png", imgAlt:"teste", languageType: LanguageType.Portuguese, countQuestions: 103} as CertificationFlat,
    { id:'4a2678e5-1410-6285-4c9c-7040ec6f1c78', title: "Microsoft Azure Fundamentals AZ-904", imgFileName: "default.png", imgAlt:"teste", languageType: LanguageType.Portuguese, countQuestions: 104} as CertificationFlat,
    { id:'4a2678e5-1410-6285-4c9c-7040ec6f1c78', title: "Microsoft Azure Fundamentals AZ-905", imgFileName: "default.png", imgAlt:"teste", languageType: LanguageType.Portuguese, countQuestions: 105} as CertificationFlat,
    { id:'4a2678e5-1410-6285-4c9c-7040ec6f1c78', title: "Microsoft Azure Fundamentals AZ-906", imgFileName: "default.png", imgAlt:"teste", languageType: LanguageType.Portuguese, countQuestions: 106} as CertificationFlat,
    { id:'4a2678e5-1410-6285-4c9c-7040ec6f1c78', title: "Microsoft Azure Fundamentals AZ-907", imgFileName: "default.png", imgAlt:"teste", languageType: LanguageType.Portuguese, countQuestions: 107} as CertificationFlat,
    { id:'4a2678e5-1410-6285-4c9c-7040ec6f1c78', title: "Microsoft Azure Fundamentals AZ-908", imgFileName: "default.png", imgAlt:"teste", languageType: LanguageType.Portuguese, countQuestions: 108} as CertificationFlat,

]

export default function CertificationListPage(){

    const [certificateList, setCertificateList] = useState([...CERTIFICATE_LIST]);
    const [filterText, setFilterText] = useState("");
    const [languageType, setLanguageType] = useState<LanguageType | undefined>(LanguageType.Portuguese);

    useEffect(() => {
    /*    api.index().then(certifications => {
            console.log(certifications)
            certificateList = certifications;
        });*/
    }, []);

    useEffect(() => {
        
    }, [filterText]);
    



    function filterCertificates (inputFilterText: string): void {
        setFilterText(inputFilterText); 
    }

    function getCertificateElementByFilter (certificate: CertificationFlat, index: number): null | JSX.Element {
        const filterIncludesCertificate =
            certificate.title
                .toLowerCase()
                .includes(
                    filterText.toLowerCase()
                );
        
        if (filterIncludesCertificate === false) {
            return null;
        }

        return (      
             <CertificateCard
                key={index}
                id={certificate.id}
                title={certificate.title}
                imgFileName={certificate.imgFileName}
                imgAlt={certificate.imgAlt}
                languageType={certificate.languageType}
                countQuestions={certificate.countQuestions}
                onCertificateClick={onCertificateClick}
            />
        );
    }


    function onCertificateClick (certificateId: string): void {
        //TODO implementar funcionalidade ao selecionar ou clicar em um certificado
        console.log(certificateId);
    }

    const handleSelectLanguageType = (event: SelectChangeEvent) => {
        const selectedValue = event.target.value as LanguageType;
        setLanguageType(selectedValue);
        console.log("mudei para: ",selectedValue);  
    };

    return (
        <LBody>
            <CertificateListTitle title={"Certificações"}></CertificateListTitle>
            <SCertificateListContentContainer>
                    <div className="filters-container">
                        <LInput 
                            label="ANSWER.DESCRIPTION"
                            value={filterText}
                            required
                            hideError
                            onChange={(e) => filterCertificates(e.target.value)}
                        />
                        <LSelect
                            label="CERTIFICATION.LANGUAGE_TYPE"
                            defaultValue={languageType}
                            customStyle={LanguageSelectStyle}
                            onChange={handleSelectLanguageType}
                            hideError
                            required
                        >
                            {
                                LanguageTypes.map( languageType => 
                                    <MenuItem
                                        key={languageType}
                                        value={languageType}
                                    >
                                        <img  
                                            style={LanguageSelectItemsStyle.flagImage}
                                            src={LanguageImagePath[languageType ? languageType : '']} 
                                        />
                                        {languageType}
                                    </MenuItem>
                                )
                            }
                        </LSelect>
                    </div>
                    <div className="certificates-container">
                        {
                            certificateList.map((certificate, index) => {
                                return getCertificateElementByFilter(certificate, index);
                            })
                        }
                    </div>
            </SCertificateListContentContainer>
        </LBody>
    )
}