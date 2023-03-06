import { Select } from '@juniorv/dashboard-uitest';
import { useState } from 'react';

import DatePicker from 'react-datepicker';
import LineChart from '../../commons/LineChart';

import { chartData } from '../../mock';

import {
  ColumnRow,
  DashboardContainer,
  DataBox,
  DateField,
  Panel,
  SelectField,
} from './styles';

function Dashboard() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleOnDateChange = () => {
    // do nothing
  };

  return (
    <DashboardContainer>
      <ColumnRow className="row">
        <div className="left-col col-12 col-md-6">
          <Panel className="map-panel">
            <h4>COUNTRY DISTRIBUTION</h4>
            <LineChart data={chartData} />
          </Panel>
        </div>
        <div className="right-col col-12 col-md-6">
          <div className="row filters-row">
            <div className="col-12 col-md-4">
              <SelectField>
                <Select
                  name="frequency"
                  options={['Daily', 'Monthly', 'Annualy']}
                >
                  FREQUENCY
                </Select>
              </SelectField>
            </div>
            <div className="col-12 col-md-4">
              <DateField>
                <h4>START</h4>
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  selected={startDate}
                  onChange={(date) => date && setStartDate(date)}
                />
              </DateField>
            </div>
            <div className="col-12 col-md-4">
              <DateField>
                <h4>END</h4>
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  selected={endDate}
                  onChange={(date) => date && setEndDate(date)}
                />
              </DateField>
            </div>
          </div>
          <div className="data-summary">
            <DataBox className="data-box">
              <h4>PERIOD INCOME</h4>
              <span>450</span>
            </DataBox>
            <DataBox className="data-box">
              <h4>NEW AFFILIATES</h4>
              <span>24</span>
            </DataBox>
            <DataBox className="data-box">
              <h4>SCORE</h4>
              <span>12</span>
            </DataBox>
            <DataBox className="data-box">
              <h4>TOTAL VIEWS</h4>
              <span>80</span>
            </DataBox>
          </div>
        </div>
      </ColumnRow>
      <ColumnRow className="row">
        <div className="left-col col-12 col-md-6">
          <Panel className="chart-panel-1">
            <h4>RENTABILITY INCOME</h4>
            <LineChart data={chartData} />
          </Panel>
        </div>
        <div className="right-col col-12 col-md-6">
          <Panel className="chart-panel-2">
            <h4>WEBSITES</h4>
            <LineChart data={chartData} />
          </Panel>
        </div>
      </ColumnRow>
    </DashboardContainer>
  );
}

export default Dashboard;
