import { FormikValues } from 'formik';
import { DataForms } from '../../../commons/form';

const recoveryForm = (formik: FormikValues): DataForms[] => [
  {
    type: 'input',
    value: formik.values.email,
    name: 'email',
    legend: 'Email',
    inputType: 'text',
    disabled: false,
    placeholder: 'E-mail',
    onChange: formik.handleChange,
  },
];

export default recoveryForm;
