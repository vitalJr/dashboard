import { Button } from '@juniorv/dashboard-uitest';
import styled from 'styled-components';

export const BaseButton = styled(Button)
  .withConfig({ displayName: 'PrimaryButton' })
  .attrs({ className: 'button button-primary button-abled' })`
  letter-spacing: 1px;
  position: relative;
  background-size: 1px 80px !important;
  font-size: 12px !important;
  font-family: 'Roboto', sans-serif;
  transition: background 120ms ease, box-shadow 120ms ease !important;
  text-transform: uppercase;
  color: #FFF;
  box-shadow: 2px 1px 4px 1px rgb(0, 0, 0, 0.20);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #FFF;
  }
`;

export const PrimaryButton = styled(BaseButton).withConfig({
  displayName: 'PrimaryButton',
})`
  border: 1.5px solid rgb(11 149 115);
  background: rgb(27, 193, 153);

  &:hover {
    color: #fff;
    background: rgba(16, 152, 119, 1);
  }
`;

export const SecondaryButton = styled(BaseButton).withConfig({
  displayName: 'SecondaryButton',
})`
  border: 1.5px solid rgb(103 94 247);
  background: rgb(139, 132, 255);

  &:hover {
    color: #fff;
    background: rgb(25 179 142);
  }
`;

export const CancelButton = styled(BaseButton).withConfig({
  displayName: 'CancelButton',
})`
  border: 1.5px solid #ed4b6b;
  background: #ed4b6b;

  &:hover {
    color: #fff;
    background: #d62447;
  }
`;
