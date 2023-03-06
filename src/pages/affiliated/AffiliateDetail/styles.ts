import { Input } from '@juniorv/dashboard-uitest';
import styled from 'styled-components';

export const ContainerTable = styled.div.withConfig({
  displayName: 'ContainerTable',
})`
  margin-right: 10px;
  overflow-x: auto;
`;

export const Title = styled.h2.withConfig({
  displayName: 'Title',
})`
  margin: 16px 0 26px;
  font-size: 24px;
`;

export const Subtitle = styled.h3.withConfig({
  displayName: 'Subtitle',
})`
  font-size: 18px;
`;

export const ContainerTop = styled.div.withConfig({
  displayName: 'ContainerTop',
})`
  display: flex;
  justify-content: space-between;
  padding-left: 3%;
  padding-right: 3%;
  padding-top: 10px;
`;

export const Row = styled.div.withConfig({
  displayName: 'Row',
})`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const WebsitesContainer = styled.div.withConfig({
  displayName: 'WebsitesContainer',
})`
  margin-top: 60px;
`;
export const IconContainer = styled.div.withConfig({
  displayName: 'IconContainer',
})`
  div {
    right: 28px;
    top: 2px;
  }
  svg {
    color: #ffffff;
    position: relative;
    right: 32px;
    top: 1px;
  }
`;

export const Fieldset = styled.fieldset.withConfig({
  displayName: 'Fieldset',
})`
  border: none;
  padding: 0;
  margin-bottom: 20px;
`;

export const ContainerButton = styled.div.withConfig({
  displayName: 'ContainerButton',
})`
  display: flex;
  gap: 10px;

  button {
    width: 160px;
  }
`;

export const InputText = styled(Input).withConfig({
  displayName: 'InputText',
})`
  background: transparent;
  border: none;
  margin-bottom: 10px;

  :focus {
    outline: none;
  }
  :not([disabled]) {
    outline: none;
    border-bottom: 2px solid black;
  }
`;

export const ScoreContainer = styled.div.withConfig({
  displayName: 'ScoreContainer',
})`
  width: 100%;
  height: 57px;
  background-color: #109877;
  font-weight: bold;
  font-size: 24px;
  color: #fff;
  margin-top: 50px;
  padding: 14px 0;
  text-align: center;
`;
