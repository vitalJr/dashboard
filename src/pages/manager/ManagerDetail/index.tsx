import { Table, Tab } from '@juniorv/dashboard-uitest';
import { useState } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  LineChart,
  Legend,
  Line,
  Pie,
  PieChart,
  Sector,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { ColumnDefinitionType } from '../../../commons/types/types';

import {
  chartData,
  MANAGER_TAB_ONE_DATA,
  MANAGER_TAB_TWO_DATA,
  pieChartData,
} from '../../../mock';
import { ContainerRoot, ContainerCharts, ContainerTable } from './styles';

interface ManagerTabOneRow {
  name: string;
  email: string;
  phone: string;
  companyName: string;
}

export const MANAGER_TAB_ONE_COLUMNS: ColumnDefinitionType<
  ManagerTabOneRow,
  keyof ManagerTabOneRow
>[] = [
  { header: 'Name', key: 'name' },
  { header: 'E-mail', key: 'email' },
  { header: 'phone', key: 'phone' },
  { header: 'Company', key: 'companyName' },
];

interface ManagerTabTwoRow {
  name: string;
  score: string;
  verificationDate: string;
}
export const MANAGER_TAB_TWO_COLUMNS: ColumnDefinitionType<
  ManagerTabTwoRow,
  keyof ManagerTabTwoRow
>[] = [
  { header: 'Name', key: 'name' },
  { header: 'Score', key: 'score' },
  { header: 'Verification Date', key: 'verificationDate' },
];
export const MANAGER_TAB_THREE_COLUMNS: ColumnDefinitionType<
  ManagerTabTwoRow,
  keyof ManagerTabTwoRow
>[] = [
  { header: 'Affiliate Name', key: 'name' },
  { header: 'Score', key: 'score' },
  { header: 'Verification Date', key: 'verificationDate' },
];
// eslint-disable-next-line no-unused-vars
function ManagerDetail() {
  // const location = useLocation();
  // const { data } = location.state;
  // console.log(managerName);
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_: any, index: any) => {
    setActiveIndex(index);
  };

  // const filteredAffiliates = managerTabOneData.filter(a => a.name === props.managerName);

  const renderActiveShape = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  }: any) => {
    const RADIAN = Math.PI / 180;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`PV ${value}`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  const tabs = [
    {
      title: 'Affiliate Manager Information',
      content: (
        <ContainerTable>
          <Table
            columns={MANAGER_TAB_ONE_COLUMNS}
            data={MANAGER_TAB_ONE_DATA}
          />
        </ContainerTable>
      ),
    },
    {
      title: 'Affiliates',
      content: (
        <ContainerTable>
          <Table
            columns={MANAGER_TAB_TWO_COLUMNS}
            data={MANAGER_TAB_TWO_DATA}
          />
        </ContainerTable>
      ),
    },
    {
      title: 'Statistics',
      content: (
        <ContainerCharts>
          <LineChart
            width={500}
            height={400}
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
          <AreaChart
            width={500}
            height={400}
            data={chartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="amt"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
          <PieChart width={400} height={400}>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={pieChartData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              onMouseEnter={onPieEnter}
            />
          </PieChart>
        </ContainerCharts>
      ),
    },
  ];

  return (
    <ContainerRoot>
      <Tab tabs={tabs} />
    </ContainerRoot>
  );
}

export default ManagerDetail;
