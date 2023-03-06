import { useFormik } from 'formik';
import { ReactElement, useState } from 'react';
import { AFFILIATE_DATA } from '../../mock';
import affiliateForm from './forms';
import ListScreen from '../../commons/list';
import ModalDefault from '../../commons/modal';
import { ColumnDefinitionType } from '../../commons/types/types';

export interface AffiliateRow {
  name: string;
  email: string;
  manager: string;
  score: number;
  verificationDate: string;
  actions: ReactElement;
}

const TABLE_COLUMNS: ColumnDefinitionType<AffiliateRow, keyof AffiliateRow>[] =
  [
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
    { key: 'verificationDate', header: 'Verification Date' },
    { key: 'manager', header: 'Manager' },
    { key: 'score', header: 'Score', align: 'center' },
    { key: 'actions', header: 'Actions', align: 'center' },
  ];

function Affiliate() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOnSubmit = () => {};

  const form = useFormik({
    initialValues: {
      searchAffiliate: '',
      selectAffiliateManager: '',
      inputEmail: '',
      inputName: '',
    },
    onSubmit: handleOnSubmit,
  });

  const handleOnOpenModal = () => {
    setOpenModal(!openModal);
  };

  const formData = affiliateForm(form);

  return (
    <>
      <ListScreen
        table={{ data: AFFILIATE_DATA, columns: TABLE_COLUMNS }}
        onChangeSearch={form.handleChange}
        onOpenModal={handleOnOpenModal}
        title="Affiliate"
      />
      <ModalDefault
        isOpen={openModal}
        formData={formData}
        onClose={handleOnOpenModal}
        title="New Affiliate"
      />
    </>
  );
}

export default Affiliate;
