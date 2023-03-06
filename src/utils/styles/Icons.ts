import styled from 'styled-components';

interface CustomProps {
  transparent?: boolean;
}

export const ClearIcon = styled.div.withConfig({
  displayName: 'ClearIcon',
})<CustomProps>`
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background: ${({ transparent }) => (transparent ? 'transparent' : '#ff3961')};
  cursor: pointer;
  position: relative;

  &::before,
  &::after {
    content: '';
    left: 50%;
    top: 50%;
    display: inline-block;
    width: 2.5px;
    height: 17px;
    background: #fff;
    position: absolute;
    border-radius: 3px;
    cursor: pointer;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(135deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

export const InfoIcon = styled.div.withConfig({
  displayName: 'InfoIcon',
})`
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  cursor: pointer;
  position: relative;
  background: #675ef7;

  &::before,
  &::after {
    content: '';
    left: 50%;
    top: 50%;
    display: inline-block;
    background: #fff;
    position: absolute;
    border-radius: 2px;
    transform: translate(-50%, -50%);
  }
  &::after {
    width: 3px;
    height: 3px;
    top: calc(50% - 5px);
  }

  &::before {
    height: 8px;
    width: 3px;
    top: calc(50% + 2px);
  }
`;
