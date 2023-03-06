import { Button } from '@juniorv/dashboard-uitest';
import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components';

import { theme } from '../../themes/themes';
import { PrimaryButton, SecondaryButton } from '../../utils/styles/Buttons';

export const SearchButton = styled(PrimaryButton).withConfig({
  displayName: 'SearchButton',
})`
  max-width: 90px;
  margin-left: 16px;
  position: relative;
  top: 27px;
`;
export const AddNewButton = styled(SecondaryButton).withConfig({
  displayName: 'SearchButton',
})`
  max-width: 180px;
  width: 40px;
  position: relative;
  top: 27px;

  span {
    color: #fff;
  }

  @media screen and (max-width: 1080px) {
    max-width: 40px;

    svg {
      margin-right: 0;
    }
    span.label {
      display: none;
    }
  }
`;
export const ContainerRoot = styled.div.withConfig({
  displayName: 'ContainerRoot',
})`
  padding: 40px 60px;

  .row {
    width: 100%;
  }
`;

export const ContainerInput = styled.div.withConfig({
  displayName: 'ContainerInput',
})`
  width: 50%;

  legend {
    font-size: 14px;
    color: #2d3047;
  }
`;

export const ContainerTop = styled.div.withConfig({
  displayName: `ContainerTop`,
})`
  display: flex;
`;

export const HeaderContainer = styled.div.withConfig({
  displayName: 'HeaderContainer',
})`
  flex-flow: nowrap;
  display: flex;
  justify-content: space-between;
`;

export const SearchContainer = styled.div.withConfig({
  displayName: 'SearchContainer',
})`
  display: flex;
  flex-flow: nowrap;
  width: 100%;
`;

export const Container = styled.div.withConfig({ displayName: 'Container' })`
  margin-bottom: 50px;
  width: 100%;

  @media screen and (max-width: 1080px) {
    margin-bottom: 20px;
  }
`;

export const ContainerTable = styled.div.withConfig({
  displayName: 'ContainerTable',
})`
  min-height: 525px;
  overflow-x: auto;

  @media screen and (max-width: 1080px) {
    min-height: 350px;
  }
  table tr th {
    padding: 14px 8px;
  }

  table tr th,
  table tr td {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow-x: hidden;
    transition: background 120ms ease;
  }

  table tr:nth-child(even) td {
    background: #dedede;
  }
  table tr:hover td {
    background: rgb(16 152 119 / 10%);
  }
  table tr td {
    padding: 12px 8px;
    line-height: 4px;

    @media screen and (max-width: 1080px) {
      padding: 0 8px;
    }
  }
`;

export const PlusIcon = styled(AddIcon).withConfig({
  displayName: 'PlusIcon',
})`
  margin-right: 8px;
  color: ${theme.colors.white};
`;

export const PaginationContainer = styled.div.withConfig({
  displayName: 'PaginationContainer',
})`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  @media screen and (max-width: 1080px) {
    margin-top: 20px;
  }
`;

export const ActionWrapper = styled.div.withConfig({
  displayName: `ActionWrapper`,
})`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DeleteRowButton = styled(Button).withConfig({
  displayName: 'DeleteRowButton',
})`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(0.25turn, rgb(255 101 132), rgb(255 57 97));
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0;
`;
