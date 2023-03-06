import styled from 'styled-components';

interface ParagraphyProps {
  isSuccess?: boolean;
}

export const Container = styled.div.withConfig({ displayName: 'Container' })`
  margin: auto;
  width: 100%;
  max-width: 406px;
  margin-top: 200px;
  background-color: #e5e5e5;
  border-radius: 8px;
`;

export const ContainerRecovery = styled.div.withConfig({
  displayName: 'ContainerRecovery',
})`
  margin: 0 30px;
  padding: 20px;
  width: 300px;
`;

export const Paragraphy = styled.p.withConfig({
  displayName: 'Paragraphy',
})<ParagraphyProps>`
  margin-bottom: 25px;
  font-size: 18px;
  text-align: ${({ isSuccess }) => (!isSuccess ? 'left' : 'center')};
  font-weight: ${({ isSuccess }) => (!isSuccess ? 'normal' : '700')};
`;
export const ContainerForm = styled.div.withConfig({
  displayName: 'ContainerForm',
})`
  margin-bottom: 30px;
`;

export const ContainerCreateNewPassword = styled.div.withConfig({
  displayName: 'ContainerCreateNewPassword',
})``;

export const ContainerSuccess = styled.div.withConfig({
  displayName: 'ContainerSuccess',
})`
  text-align: center;
  margin-bottom: 20px;
`;
