import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { ContainerForm, Paragraphy } from './styles';
import recoveryForm from './forms';
import Form from '../../commons/form';
import { Container, LoginContainer } from '../login/styles';
import { PrimaryButton as LoginButton } from '../../utils/styles/Buttons';

function RecoveryPassword() {
  const onClickEvent = (): void => {};

  const formikRecovery = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: () => {
      // console.log(values);
    },
  });

  const formData = recoveryForm(formikRecovery);

  return (
    <Container>
      <LoginContainer>
        <Paragraphy>Reset your password inserting your email below.</Paragraphy>
        <ContainerForm>
          <Form formData={formData} />
        </ContainerForm>
        <Link to="/recovery/password">
          <LoginButton onClick={onClickEvent} size="full">
            Reset Password
          </LoginButton>
        </Link>
      </LoginContainer>
    </Container>
  );
}

export default RecoveryPassword;
