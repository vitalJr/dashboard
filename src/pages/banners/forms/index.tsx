import { FormikValues } from 'formik';
import { DataForms } from '../../../commons/form';
import { MANAGER_DATA } from '../../../mock';

const bannerForm = (formik: FormikValues): DataForms[] => [
  {
    type: 'select',
    value: formik.values.selectAffiliate,
    name: 'selectAffiliate',
    onChange: formik.handleChange,
    legend: 'Affiliate',
    optionsList: MANAGER_DATA.map((d) => d.name).sort(),
  },
  {
    type: 'file',
    name: 'fileBanner',
    disabled: false,
    placeholder: 'http://bannerlink.com',
    onChange: formik.handleChange,
    legend: 'Banner link',
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
    value: formik.values.creationDate,
    name: 'creationDate',
    inputType: 'date',
    disabled: false,
    onChange: formik.handleChange,
    legend: 'Creation Date',
  },
  {
    type: 'input',
    value: formik.values.endDate,
    name: 'endDate',
    inputType: 'date',
    disabled: false,
    onChange: formik.handleChange,
    legend: 'End Date',
  },
];

export default bannerForm;
