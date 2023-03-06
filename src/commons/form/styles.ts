import { Input, Select } from '@juniorv/dashboard-uitest';
import styled from 'styled-components';

export const ContainerModal = styled.div.withConfig({
  displayName: 'ContainerModal',
})``;

export const ContainerSelectModal = styled.div.withConfig({
  displayName: 'ContainerFieldsModal',
})`
  margin-top: 10px;
  width: 100%;
`;

export const ContainerInputModal = styled.div.withConfig({
  displayName: 'ContainerFieldsModal',
})`
  margin-top: 20px;
  width: 100%;
`;

export const ContainerButtonModal = styled.div.withConfig({
  displayName: 'ConatinerButtonModal',
})`
  display: flex;
  margin-top: 20px;
`;

export const SelectDefault = styled(Select).withConfig({
  displayName: 'SelectDefault',
})`
  appearance: none;
  display: block;
  font-size: 14px;
  font-weight: 700;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 5px 24px;
  height: 32px;
  border: none;
  background: #e5e5e5;
  border-radius: 3px;
  color: white;
`;

export const InputDefault = styled(Input).withConfig({
  displayName: 'InputDefault',
})`
  width: 100%;
  height: 40px !important;
  border-radius: 3px;
  border: 1px solid transparent;
  border: 1px solid #8c9895;
  border-top: none;
  border-bottom: 1px solid #ddd;
  box-shadow: inset 0 1px 2px rgb(0 0 0 / 39%), 0 -1px 1px #fff, 0 1px #efefef;
  margin-bottom: 10px;
  padding: 4px 16px;
  outline: 0;

  &::placeholder {
    color: #afafaf;
    font-size: 16px;
  }
`;
