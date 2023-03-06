import {
  CartesianGrid,
  Legend,
  Line,
  LineChart as RechartsLineChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface DatasetValue {
  name: string;
  [key: number]: number;
}

interface LineChartProps {
  data: DatasetValue[];
}

const colors = ['#82ca9d', '#8884d8'];

function LineChart({ data }: LineChartProps) {
  const keys = [...Object.keys(data[0])].filter((k) => k !== 'name');

  return (
    <ResponsiveContainer width="100%" height="75%">
      <RechartsLineChart
        data={data}
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

        {keys.map((key, index) => (
          <Line
            key={key}
            name={key}
            type="monotone"
            dataKey={key}
            stroke={colors[index]}
          />
        ))}
      </RechartsLineChart>
    </ResponsiveContainer>
  );
}

export default LineChart;
