import styled from 'styled-components';

export const ContainerRoot = styled.div.withConfig({
  displayName: 'ContainerRoot',
})`
  width: 100%;
  background-color: #f2f2f2;
  margin: auto;
  padding: 5px;
`;

export const ContainerTable = styled.div.withConfig({
  displayName: 'ContainerTable',
})`
  margin-right: 10px;
  overflow-x: auto;
`;

export const ContainerCharts = styled.div.withConfig({
  displayName: 'ConteinerCharts',
})`
  display: flex;
  justify-content: space-around;
`;
