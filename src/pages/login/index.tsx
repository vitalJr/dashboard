import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  FormLogin,
  LoginContainer,
  RecoverPasswordLink,
  ContainerRecovery,
  ContainerLogo,
  ContainerCheckbox,
  LabelCheckbox,
} from './styles';
import loginForm from './forms';
import Form from '../../commons/form';
import Logo from '../../assets/Logo';
import { PrimaryButton as LoginButton } from '../../utils/styles/Buttons';

function Login() {
  // const loginService = new LoginService();

  // const auth = useAuth();
  const formikLogin = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: () => {
      // console.log(values);
    },
  });

  const navigate = useNavigate();

  const login = (): void => {
    // const emailExtensaion = email.split('@')[1];
    // const emailOperator = emailExtensaion.split('.')[0];
    // localStorage.setItem('email', formikLogin.values.email);
    //
    // try {
    //   const response = await loginService.login(email, password);
    //   if (response.data) {
    //     auth.login(response.data);
    //   }
    // } catch (e) {
    //   alert('not logged');
    // }
    if (formikLogin.values.email && formikLogin.values.password)
      navigate('/dashboard');
  };

  const formData = loginForm(formikLogin);

  const onClickEvent = (): void => {
    login();
  };

  return (
    <Container>
      <LoginContainer>
        <ContainerLogo>
          <Logo />
        </ContainerLogo>

        <FormLogin>
          <Form formData={formData} />
          <ContainerRecovery>
            <ContainerCheckbox>
              <input
                type="checkbox"
                id="remember"
                name="remember"
                onChange={undefined}
              />
              <LabelCheckbox>Remember my credentials</LabelCheckbox>
            </ContainerCheckbox>

            <RecoverPasswordLink to="/recovery">
              Forgot password?
            </RecoverPasswordLink>
          </ContainerRecovery>
          <LoginButton
            style={{ marginTop: '60px' }}
            onClick={onClickEvent}
            size="full"
          >
            LOGIN
          </LoginButton>
        </FormLogin>
      </LoginContainer>
    </Container>
  );
}

export default Login;
