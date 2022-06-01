import * as yup from "yup";

export const CertificationValidation = yup.object().shape({
    title: yup.string().required('CERTIFICATION.TITLE_NOT_INFORMED'),
});
