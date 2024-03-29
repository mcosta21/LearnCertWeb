
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect } from 'react';
import { LInput } from '@components/LInput';
import { useUser } from '@hooks/useUser';
import { useNavigate } from 'react-router-dom';
import { RouterKey } from '@routes/routekeys';
import { Button } from '@mui/material';
import LBody from '@components/LBody';
import { SFormContainer } from './styles';
import Translate from '@services/i18nProvider/Translate';
import { encrypt } from '@services/EncryptionHandler';

interface AuthUser {
    email: string;
    password: string;
};

const signInFormSchema = yup.object().shape({
    email: yup
        .string()
        .required('USER.EMAIL_NOT_INFORMED')
        .email('USER.INVALID_EMAIL'),
    password: yup
        .string()
        .required('USER.PASSWORD_NOT_INFORMED')
});

export default function LoginPage() {
    const { getAuthenticatedUser, login } = useUser();
    const { t } = useTranslation();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<AuthUser>({
        resolver: yupResolver(signInFormSchema),
    });

    async function handleSignIn(values: AuthUser) {
        try {
            await login(values.email, encrypt(values.password));
        } catch (err: any) {
            alert(err.message)
        }
    };

    useEffect(() => {
      if (getAuthenticatedUser()) {
        navigate(RouterKey.Management);
      }
    }, [getAuthenticatedUser()]);

    return (
        <LBody>
            <SFormContainer
                onSubmit={handleSubmit(handleSignIn)}
            >
                <LInput
                    type="email"
                    label="E-mail"
                    placeholder={t('USER.EMAIL_PLACEHOLDER')}
                    error={errors.email?.message}
                    {...register('email')}
                />
                <LInput
                    type="password"
                    label="USER.PASSWORD"
                    placeholder={t('USER.PASSWORD_PLACEHOLDER')}
                    error={errors.password?.message}
                    {...register('password')}
                />
                <Button
                    variant="contained"
                    size="medium"
                    type="submit"
                >
                    <Translate value="USER.LOGIN" />
                </Button>
            </SFormContainer>
        </LBody>
    )
}
