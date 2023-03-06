import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import styled from 'styled-components';

export const ContainerModal = styled.div.withConfig({
  displayName: 'ContainerModal',
})`
  margin-top: 40px;

  legend {
    margin-bottom: 4px;
    font-size: 14px;
    color: #2d3047;
  }
`;

export const Title = styled.div.withConfig({
  displayName: 'Title',
})`
  font-size: 24px;
  font-weight: 700;
  color: #2d3047;
`;

export const ContainerSelectModal = styled.div.withConfig({
  displayName: 'ContainerSelectModal',
})`
  margin-top: 10px;
  width: 100%;
`;

export const ContainerInputModal = styled.div.withConfig({
  displayName: 'ContainerInputModal',
})`
  margin-top: 10px;
  width: 98%;
`;

export const ContainerButtonModal = styled.div.withConfig({
  displayName: 'ContainerButtonModal',
})`
  display: flex;
  margin-top: 20px;
  gap: 10px;
`;

export const ModalForm = styled(Modal).withConfig({
  displayName: 'ModalDefault',
})``;

export const BoxForm = styled(Box).withConfig({ displayName: 'BoxForm' })`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #e5e5e5;
  border: 1px solid #e5e5e5;
  box-shadow: 24px;
  padding: 24px;
  border-radius: 8px;
`;
