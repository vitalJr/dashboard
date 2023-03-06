import { FormikValues } from 'formik';
import { DataForms } from '../../../commons/form';

const affiliateManagerForm = (formik: FormikValues): Array<DataForms> => [
  {
    type: 'input',
    value: formik.values.name,
    name: 'name',
    inputType: 'text',
    disabled: false,
    legend: 'Name',
    placeholder: 'Name',
    onChange: formik.handleChange,
  },
  {
    type: 'input',
    value: formik.values.telephone,
    name: 'telephone',
    inputType: 'text',
    disabled: false,
    legend: 'Telephone',
    placeholder: 'Telephone',
    onChange: formik.handleChange,
  },
];

export default affiliateManagerForm;
