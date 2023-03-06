import styled from 'styled-components';
import { theme } from '../../themes/themes';

export const DashboardContainer = styled.div.withConfig({
  displayName: 'DashboardContainer',
})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  height: calc(100vh - 151px);

  h4 {
    margin-top: 8px;
  }

  span,
  h4 {
    color: #2d3047;
  }
`;

export const ColumnRow = styled.div.withConfig({
  displayName: 'ColumnRow',
})`
  display: flex;
  justify-content: space-between;
  height: inherit;
  margin: 12px 8px;
  width: 100%;

  @media screen and (max-width: 768px) {
    margin: 0 auto;

    > * {
      margin: 8px 0;
    }

    &:first-child {
      flex-flow: row wrap-reverse;
    }
  }

  .right-col {
    display: flex;
    flex-flow: column nowrap;
  }

  .filters-row {
    justify-content: space-between;

    @media screen and (max-width: 768px) {
      > * {
        margin: 4px 0;
      }
    }

    margin-bottom: 12px;
  }
  .data-summary {
    display: flex;
    flex-flow: row wrap;
    height: 100%;
  }
`;

export const Panel = styled.div.withConfig({
  displayName: 'Panel',
})`
  background: ${theme.colors.white};
  padding: 16px;
  border-radius: 8px;
  width: 100%;
  height: 100%;
`;

export const DataBox = styled(Panel).withConfig({
  displayName: 'DataBox',
})`
  width: 48.5%;
  margin: 1.5% 3%;
  margin-right: 0;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: unset;

  h4 {
    margin-top: 0;
    margin-bottom: 8px;
  }

  span {
    font-size: 56px;
    font-weight: 800;
    font-family: 'Inter', sans-serif;
  }

  &:nth-child(1),
  :nth-child(3) {
    margin-left: 0;
  }

  &:nth-child(2),
  :nth-child(4) {
    margin-right: 0;
  }
  &:nth-child(3),
  :nth-child(4) {
    margin-bottom: 0;
  }
`;

export const Field = styled.div.withConfig({
  displayName: 'Field',
})`
  h4 {
    font-weight: 700;
    font-size: 12px;
    margin: 0;
    margin-bottom: 8px;
    color: #f1f1f1;
  }
`;

export const DateField = styled(Field).withConfig({
  displayName: 'DateField',
})`
  .react-datepicker-wrapper {
    input {
      background: #f1f1f1;
      color: #2d3047;
      font-size: 14px;
      font-weight: 700;
      margin: 0;
      padding: 0 12px;
      height: 32px;
      border: none;
      border-radius: 3px;
      width: 100%;
    }
  }
  .date-input-container label {
    color: #f1f1f1;
  }
`;

export const SelectField = styled(Field).withConfig({
  displayName: 'SelectField',
})`
  select {
    background: #f1f1f1 !important;
    color: #2d3047;
  }
`;
