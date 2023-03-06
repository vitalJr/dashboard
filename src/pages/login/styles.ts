import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../themes/themes';

export const ContainerCheckbox = styled.span.withConfig({
  displayName: 'ContainerCheckbox',
})``;

export const LabelCheckbox = styled.span.withConfig({
  displayName: 'LabelCheckbox',
})`
  font-size: 12px;
  color: #253627;
  float: right;
`;

export const ContainerLogo = styled.div.withConfig({
  displayName: 'ContainerLogo',
})`
  text-align: center;
`;

export const Container = styled.div.withConfig({ displayName: 'Container' })`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;

  legend {
    font-size: 12px;
    margin-bottom: 8px;
    color: #253527;
  }

  input[type='checkbox'] {
    all: unset;
    border: 1px solid #8c9895;
    width: 12px;
    height: 12px;
    border-radius: 3px;
    margin-right: 8px;
    display: inline-block;
    background-color: transparent;
  }

  input[type='checkbox']:checked {
    background-color: ${theme.link.default} !important;
    border: 1px solid ${theme.link.default} !important;
  }
`;

export const LoginContainer = styled.div.withConfig({
  displayName: 'LoginContainer',
})`
  margin: auto;
  max-width: 400px;
  width: 100%;
  text-align: left;
  background-color: #e5e5e5;
  padding: 16px 32px 32px 48px;
  box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 8px;
`;

export const FormLogin = styled.form.withConfig({ displayName: 'FormLogin' })`
  legend {
    font-size: 14px;
  }
  input {
    margin-bottom: 12px;
  }
`;

export const RecoverPasswordLink = styled(Link).withConfig({
  displayName: 'RecoverPasswordLink',
})`
  color: ${theme.link.default};
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;

  :hover {
    color: #0a7c61;
  }
`;

export const ContainerRecovery = styled.div.withConfig({
  displayName: 'ContainerRecovery',
})`
  display: flex;
  justify-content: space-between;
`;
