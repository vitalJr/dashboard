import { Link } from 'react-router-dom';
import { AffiliateRow } from './pages/affiliated';
import { AffiliateDetailsRow } from './pages/affiliated/AffiliateDetail';
import { BannerRow } from './pages/banners';
import { ClearIcon, InfoIcon } from './utils/styles/Icons';

const AFFILIATE_DEFAULT_MOCK: Omit<AffiliateRow, 'name'> = {
  email: 'teste@email.com',
  manager: 'Teste manager',
  score: 10,
  verificationDate: '12/21/2022',
  actions: (
    <>
      <ClearIcon />
      <Link
        style={{ marginLeft: '8px' }}
        to="/affiliates/details"
        state={{ data: { test: 'teste' } }}
      >
        <InfoIcon />
      </Link>
    </>
  ),
};

export const AFFILIATE_DATA: AffiliateRow[] = [
  {
    name: 'teste sdjcsdbcss skdcsddjcnksjdnc sdncskjdn',
    ...AFFILIATE_DEFAULT_MOCK,
  },
  {
    name: 'teste5 sdjcsdbcss skdcsddjcnksjdnc sdncskjdn',
    ...AFFILIATE_DEFAULT_MOCK,
  },
  {
    name: 'teste2 sdjcsdbcss skdcsddjcnksjdnc sdncskjdn',
    ...AFFILIATE_DEFAULT_MOCK,
  },
  {
    name: 'teste3 sdjcsdbcss skdcsddjcnksjdnc sdncskjdn',
    ...AFFILIATE_DEFAULT_MOCK,
  },
  {
    name: 'teste4 sdjcsdbcss skdcsddjcnksjdnc sdncskjdn',
    ...AFFILIATE_DEFAULT_MOCK,
  },
  {
    name: 'teste sdjcsdbcss skdcsddjcnksjdnc sdncskjdn',
    ...AFFILIATE_DEFAULT_MOCK,
  },
  {
    name: 'teste5 sdjcsdbcss skdcsddjcnksjdnc sdncskjdn',
    ...AFFILIATE_DEFAULT_MOCK,
  },
  {
    name: 'teste2 sdjcsdbcss skdcsddjcnksjdnc sdncskjdn',
    ...AFFILIATE_DEFAULT_MOCK,
  },
  {
    name: 'teste3 sdjcsdbcss skdcsddjcnksjdnc sdncskjdn',
    ...AFFILIATE_DEFAULT_MOCK,
  },
  {
    name: 'teste4 sdjcsdbcss skdcsddjcnksjdnc sdncskjdn',
    ...AFFILIATE_DEFAULT_MOCK,
  },
  {
    name: 'teste6 sdjcsdbcss skdcsddjcnksjdnc sdncskjdn',
    ...AFFILIATE_DEFAULT_MOCK,
  },
];

export const LINK_MOCK = {
  name: 'Test',
  hyperlink: 'www.google.com',
  initialDate: '28/12/2022',
  endDate: '28/12/2023',
  seasonal: 'No',
  score: 95,
  actions: <ClearIcon />,
};

export const LINK_DATA = [
  LINK_MOCK,
  LINK_MOCK,
  LINK_MOCK,
  LINK_MOCK,
  LINK_MOCK,
  LINK_MOCK,
  LINK_MOCK,
  LINK_MOCK,
  LINK_MOCK,
];

export const AFFILIATE_DETAILS_MOCK = {
  name: 'Magazine Luiza',
  email: 'magalu@email.com',
  score: 99,
  verificationDate: '26/21/2022',
  actions: <ClearIcon />,
};
export const AFFILIATE_DETAILS_DATA: AffiliateDetailsRow[] = [
  AFFILIATE_DETAILS_MOCK,
  AFFILIATE_DETAILS_MOCK,
  AFFILIATE_DETAILS_MOCK,
  AFFILIATE_DETAILS_MOCK,
];

const MANAGER_MOCK = {
  name: 'teste sdjcsdbcss skdcsddjcnksjdnc sdncskjdn',
  qtyAffiliates: 7,
  actions: (
    <Link to="/managerDetail" state={{ data: { test: 'teste' } }}>
      <InfoIcon />
    </Link>
  ),
};
export const MANAGER_DATA = [
  MANAGER_MOCK,
  MANAGER_MOCK,
  MANAGER_MOCK,
  MANAGER_MOCK,
  MANAGER_MOCK,
];

const MANAGER_TAB_ONE_MOCK = {
  name: 'teste sdjcsdbcss skdcsddjcnksjdnc sdncskjdn',
  email: 'teste@email.com',
  phone: '+351956665414',
  companyName: 'companyNameTest',
};
const MANAGER_TAB_TWO_MOCK = {
  name: 'teste sdjcsdbcss skdcsddjcnksjdnc sdncskjdn',
  score: '99',
  verificationDate: '26/21/2022',
};

export const MANAGER_TAB_TWO_DATA = [
  MANAGER_TAB_TWO_MOCK,
  MANAGER_TAB_TWO_MOCK,
  MANAGER_TAB_TWO_MOCK,
  MANAGER_TAB_TWO_MOCK,
  MANAGER_TAB_TWO_MOCK,
];
export const MANAGER_TAB_ONE_DATA = [
  MANAGER_TAB_ONE_MOCK,
  MANAGER_TAB_ONE_MOCK,
  MANAGER_TAB_ONE_MOCK,
  MANAGER_TAB_ONE_MOCK,
  MANAGER_TAB_ONE_MOCK,
  MANAGER_TAB_ONE_MOCK,
];

export const chartData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
  },
];

export const pieChartData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

export const BANNER_MOCK: BannerRow = {
  name: 'teste1 ajohsdfjklasn asljdnaljsdla asldjnajlksd',
  affiliate: 'Magazine Luiza',
  actions: <ClearIcon />,
  creationDate: new Date(
    new Date().setDate(new Date().getDate() - 5)
  ).toLocaleDateString(),
  endDate: new Date(
    new Date().setDate(new Date().getDate() + 5)
  ).toLocaleDateString(),
  seasonal: 'Yes',
  visits: 432,
  score: 9,
};
export const BANNER_DATA = [
  BANNER_MOCK,
  BANNER_MOCK,
  BANNER_MOCK,
  BANNER_MOCK,
  BANNER_MOCK,
  BANNER_MOCK,
  BANNER_MOCK,
  BANNER_MOCK,
  BANNER_MOCK,
  BANNER_MOCK,
];
