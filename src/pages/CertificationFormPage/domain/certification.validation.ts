import * as yup from "yup";

export const CertificationValidation = yup.object().shape({
    title: yup.string().required('CERTIFICATION.TITLE_NOT_INFORMED'),
    modules: yup.array().min(1).of(
        yup.object().shape({
          title: yup.string().required('MODULE.TITLE_NOT_INFORMED'),
          questions: yup.array().min(1).of(
                yup.object().shape({
                    description: yup.string().required('QUESTION.DESCRIPTION_NOT_INFORMED'),
                    answerOptions: yup.array().min(1).of(
                        yup.object().shape({
                            description: yup.string().required('ANSWER_OPTION.DESCRIPTION_NOT_INFORMED'),
                        })
                    ),
                })
            ),
        })
    ),

});
