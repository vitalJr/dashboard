import { FormikValues } from 'formik';
import { DataForms } from '../../../../commons/form';

const createPasswordForm = (formik: FormikValues): DataForms[] => [
  {
    type: 'input',
    value: formik.values.password,
    name: 'password',
    legend: 'Password',
    inputType: 'password',
    disabled: false,
    placeholder: 'Password',
    onChange: formik.handleChange,
  },
  {
    type: 'input',
    value: formik.values.repeatPassword,
    name: 'repeatPassword',
    legend: 'Repeat Password',
    inputType: 'password',
    disabled: false,
    placeholder: 'Repeat Password',
    onChange: formik.handleChange,
  },
];

export default createPasswordForm;
