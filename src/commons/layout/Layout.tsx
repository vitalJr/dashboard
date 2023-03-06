import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import {
  ContentContainer,
  ContentPanel,
  ContentTitle,
  MainMenuContainer,
  AsideContainer,
  Wrapper,
  UserContainer,
  ContentHeader,
} from './styles';
import DashboardSVG from '../../assets/svgs/Dashboard';
import AffiliatesSVG from '../../assets/svgs/Affiliates';
import BannersSVG from '../../assets/svgs/Banners';
import LinksSVG from '../../assets/svgs/Links';
import LogoSVG from '../../assets/svgs/Logo';
import UserImage from '../../assets/images/user.png';
import { MainMenu } from '@juniorv/dashboard-uitest';

interface LayoutProps {
  title: string;
  dashboard?: boolean;
  children: ReactElement;
}

function Layout({ title, children, dashboard = false }: LayoutProps) {
  return (
    <Wrapper>
      <AsideContainer>
        <MainMenuContainer>
          <MainMenu
            mode="floating"
            header={
              <Link to="/dashboard">
                <LogoSVG />
              </Link>
            }
            items={[
              {
                icon: <DashboardSVG />,
                label: 'dashboard',
                path: '/dashboard',
              },
              {
                icon: <AffiliatesSVG />,
                label: 'Affiliates',
                path: '/affiliates',
              },
              {
                icon: <BannersSVG />,
                label: 'Banners',
                path: '/banners',
              },
              {
                icon: <LinksSVG />,
                label: 'Links',
                path: '/links',
              },
            ]}
          />
        </MainMenuContainer>
      </AsideContainer>
      <ContentContainer isDashboard={dashboard} className="container-fluid">
        <ContentHeader>
          <ContentTitle>{title}</ContentTitle>
          <UserContainer isDashboard>
            <img src={UserImage} alt="Default user profile" />
          </UserContainer>
        </ContentHeader>
        <ContentPanel
          title={title}
          className="container-fluid"
          isDashboard={dashboard}
        >
          {children}
        </ContentPanel>
      </ContentContainer>
    </Wrapper>
  );
}

export default Layout;
