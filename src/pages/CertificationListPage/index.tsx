import LBody from "@components/LBody";
import { LInput } from "@components/LInput";
import LSelect from "@components/LSelect";
import { useUser } from "@hooks/useUser";
import { MenuItem, SelectChangeEvent } from "@mui/material";
import { LanguageTypeOptions } from "@pages/CertificationFormPage/domain/certification.model";
import { CertificationCard } from "@pages/CertificationListPage/components/CertificateCard";
import { CertificationFlat } from "@pages/CertificationListPage/domain/certification-flat.model";
import Translate from "@services/i18nProvider/Translate";
import { useEffect, useState } from "react";
import * as api from './services/certification.api';
import { SCertificateListTitle, SCertificationListContainer, SLanguageTypeOption } from "./styles";

export default function CertificationListPage() {

    const [certifications, setCertifications] = useState<CertificationFlat[]>([]);
    const [filterText, setFilterText] = useState("");
    const [languageType, setLanguageType] = useState<string>('All');

    const { getAuthenticatedUser } = useUser();

    const loading = certifications.length === 0;

    useEffect(() => {
        getCertifications();
    }, []);

    function filterCertificates(inputFilterText: string): void {
        setFilterText(inputFilterText);
    }

    function handleDeleteCertification(id: string) {
        api.remove(id).then(() => {
            getCertifications();
        });
    }

    function getCertifications(){
        api.index().then(certifications => {
            setCertifications(certifications);
        });
    }

    const handleSelectLanguageType = (event: SelectChangeEvent) => {
        const selectedValue = event.target.value;
        setLanguageType(selectedValue);
    };

    const filteredCertifications = certifications
        .filter(x => x.title.toLowerCase().includes(filterText?.toLowerCase()) &&
                    (x.languageType === languageType || languageType === 'All'));

    const isAdmin = getAuthenticatedUser()?.role === 'Admin';

    const userId = getAuthenticatedUser()?.id ?? '';

    return (
        <LBody loading={loading}>

            <SCertificateListTitle>
                <Translate value="CERTIFICATION.LABEL" />
            </SCertificateListTitle>

            <SCertificationListContainer>
                <div className="filters-container">
                    <LInput
                        label="SEARCH"
                        value={filterText}
                        required
                        hideError
                        onChange={(e) => filterCertificates(e.target.value)}
                    />
                    <LSelect
                        label="CERTIFICATION.LANGUAGE_TYPE"
                        defaultValue={languageType}
                        onChange={handleSelectLanguageType}
                        hideError
                        required
                    >
                        {
                            LanguageTypeOptions.map(option =>
                                <MenuItem
                                    key={option.languageType}
                                    value={option.languageType}
                                    className="language-type-option"
                                >
                                    <SLanguageTypeOption>
                                        <img
                                            className="language-type-option-image"
                                            src={option.image}
                                        />
                                        <Translate value={option.languageType} />
                                    </SLanguageTypeOption>
                                    
                                </MenuItem>
                            )
                        }
                    </LSelect>
                </div>

                <div className="certificates-container">
                    {
                        filteredCertifications.map((certification, index) => (
                            <CertificationCard
                                key={index}
                                certification={certification}
                                isAdmin={isAdmin}
                                userId={userId}
                            />
                        ))
                    }
                </div>

            </SCertificationListContainer>
        </LBody>
    )
}