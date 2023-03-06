import { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Form from '../../../commons/form';
import createPasswordForm from './forms';
import {
  ContainerCreateNewPassword,
  ContainerForm,
  ContainerSuccess,
  Paragraphy,
} from './styles';
import Success from './success';
import { Container, LoginContainer } from '../../login/styles';
import { PrimaryButton as LoginButton } from '../../../utils/styles/Buttons';

function CreatePassword() {
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();

  const onClickEvent = (): void => {
    if (!isSuccess) {
      setIsSuccess(true);
    } else {
      navigate('/dashboard');
    }
  };

  const formikCreatePassword = useFormik({
    initialValues: {
      password: '',
      repeatPassword: '',
    },
    onSubmit: () => {
      // console.log(values);
    },
  });

  const formData = createPasswordForm(formikCreatePassword);

  return (
    <Container>
      <LoginContainer>
        <Paragraphy isSuccess={isSuccess}>
          {!isSuccess
            ? 'Create a new password below.'
            : 'Password changed succesfully!'}
        </Paragraphy>
        {!isSuccess ? (
          <ContainerCreateNewPassword>
            <ContainerForm>
              <Form formData={formData} />
            </ContainerForm>
          </ContainerCreateNewPassword>
        ) : (
          <ContainerSuccess>
            <Success />
          </ContainerSuccess>
        )}
        <LoginButton onClick={onClickEvent} size="full">
          {!isSuccess ? 'SUBMIT' : 'Go to login'}
        </LoginButton>
      </LoginContainer>
    </Container>
  );
}

export default CreatePassword;
