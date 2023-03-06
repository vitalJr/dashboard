import styled from 'styled-components';

const white = '#e5e5e5';

interface ContainerPainelProps {
  isDashboard?: boolean;
}

export const Wrapper = styled.div.withConfig({
  displayName: 'Wrapper',
})`
  display: flex;
`;

export const AsideContainer = styled.div.withConfig({
  displayName: 'AsideContainer',
})`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100vh;
`;

export const ContentContainer = styled.div.withConfig({
  displayName: 'ContentContainer',
})<ContainerPainelProps>`
  display: flex;
  flex-flow: column nowrap;
  padding: ${({ isDashboard }) =>
    isDashboard ? '16px 85px 0 55px' : '16px 115px 0 55px'};
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;

export const ContentTitle = styled.h2.withConfig({
  displayName: 'ContentTitle',
})`
  color: ${white};
  margin-bottom: 8px;
  font-size: 28px;
  margin-left: 60px;
`;

export const ContentPanel = styled.div.withConfig({
  displayName: 'ContentPanel',
})<ContainerPainelProps>`
  padding: 0;
  box-sizing: border-box;
  background: ${({ isDashboard }) => (isDashboard ? 'transparent' : white)};
  /* height: calc(100vh - 175px); */
  margin: ${({ isDashboard }) => (isDashboard ? '35px' : '47px 0 0 58px')};
  border-radius: 8px;
`;

export const ContentHeader = styled.div.withConfig({
  displayName: 'ContentHeader',
})`
  display: flex;
  justify-content: space-between;
`;
export const UserContainer = styled.div.withConfig({
  displayName: 'UserContainer',
})<ContainerPainelProps>`
  display: block;
  margin-left: auto;
  max-width: 60px;
  max-height: 60px;
  width: 100%;
  position: absolute;
  right: 57px;
  top: 24px;
  cursor: pointer;

  img {
    width: inherit;
  }
`;

export const MainMenuContainer = styled.div.withConfig({
  displayName: 'MainMenuContainer',
})`
  & #main-menu {
    background: #109877;

    li.menu-item button {
      color: ${white};
      font-weight: 700;
      text-transform: capitalize;

      &:hover {
        background: #0e7e63;
      }
    }

    .icon {
      padding: 0 !important;

      svg {
        fill: ${white};
      }
    }
  }
`;
