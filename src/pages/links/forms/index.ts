import { FormikValues } from 'formik';
import { DataForms } from '../../../commons/form';

const linksForm = (formik: FormikValues): DataForms[] => [
  {
    type: 'select',
    value: formik.values.selectAffiliate,
    name: 'selectAffiliate',
    optionsList: ['', 'teste 1', 'teste 2'],
    onChange: formik.handleChange,
  },
  {
    type: 'input',
    value: formik.values.linkUrl,
    name: 'linkUrl',
    inputType: 'text',
    disabled: false,
    placeholder: 'Url',
    onChange: formik.handleChange,
  },
  {
    type: 'input',
    value: formik.values.linkRegion,
    name: 'linkRegion',
    inputType: 'text',
    disabled: false,
    placeholder: 'Link Region',
    onChange: formik.handleChange,
  },
  {
    type: 'input',
    value: formik.values.specifiedURL,
    name: 'specifiedURL',
    inputType: 'text',
    disabled: false,
    placeholder: 'Specified URL',
    onChange: formik.handleChange,
  },
  {
    type: 'input',
    value: formik.values.redirectURL,
    name: 'redirectURL',
    inputType: 'text',
    disabled: false,
    placeholder: 'Redirect URL',
    onChange: formik.handleChange,
  },
  {
    type: 'input',
    value: formik.values.startDate,
    name: 'startDate',
    inputType: 'date',
    disabled: false,
    placeholder: 'startDate',
    onChange: formik.handleChange,
  },
  {
    type: 'input',
    value: formik.values.endDate,
    name: 'endDate',
    inputType: 'date',
    disabled: false,
    placeholder: 'startDate',
    onChange: formik.handleChange,
  },
];

export default linksForm;
