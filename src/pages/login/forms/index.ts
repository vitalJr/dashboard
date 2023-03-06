import { FormikValues } from 'formik';
import { DataForms } from '../../../commons/form';

const loginForm = (formik: FormikValues): DataForms[] => [
  {
    type: 'input',
    value: formik.values.email,
    name: 'email',
    legend: 'email',
    inputType: 'text',
    disabled: false,
    placeholder: 'Email',
    onChange: formik.handleChange,
  },
  {
    type: 'input',
    value: formik.values.password,
    name: 'password',
    legend: 'password',
    inputType: 'password',
    disabled: false,
    placeholder: 'Password',
    onChange: formik.handleChange,
  },
];

export default loginForm;
