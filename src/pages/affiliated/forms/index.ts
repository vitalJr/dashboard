import { FormikValues } from 'formik';
import { DataForms } from '../../../commons/form';

const affiliateForm = (formik: FormikValues): Array<DataForms> => [
  {
    type: 'select',
    value: formik.values.selectAffiliateManager,
    legend: 'Affiliate Manager',
    name: 'selectAffiliateManager',
    optionsList: ['', 'teste 1', 'teste 2'],
    onChange: formik.handleChange,
  },
  {
    type: 'input',
    value: formik.values.inputEmail,
    name: 'inputEmail',
    legend: 'Email',
    inputType: 'text',
    disabled: false,
    placeholder: 'Email',
    onChange: formik.handleChange,
  },
  {
    type: 'input',
    value: formik.values.inputName,
    name: 'inputName',
    legend: 'Name',
    inputType: 'text',
    disabled: false,
    placeholder: 'Name',
    onChange: formik.handleChange,
  },
];

export default affiliateForm;
