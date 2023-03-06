import { useFormik } from 'formik';
import { ReactElement, useState } from 'react';
import ModalDefault from '../../commons/modal';
import { MANAGER_DATA } from '../../mock';
import affiliateManagerForm from './forms';
import ListScreen from '../../commons/list';
import { ColumnDefinitionType } from '../../commons/types/types';

interface ManagerRow {
  name: string;
  qtyAffiliates: number;
  actions: ReactElement;
}

export const MANAGER_COLUMNS: ColumnDefinitionType<
  ManagerRow,
  keyof ManagerRow
>[] = [
  {
    header: 'Name',
    key: 'name',
  },
  {
    header: 'Total Affiliates',
    key: 'qtyAffiliates',
  },
  {
    header: 'Actions',
    key: 'actions',
  },
];

function Manager() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOnSubmit = () => {};

  const form = useFormik({
    initialValues: {
      selectAffiliateManager: '',
      name: '',
      telephone: '',
    },
    onSubmit: handleOnSubmit,
  });

  const handleOnOpenModal = () => {
    setOpenModal(!openModal);
  };

  const formData = affiliateManagerForm(form);
  return (
    <>
      <ListScreen
        table={{ data: MANAGER_DATA, columns: MANAGER_COLUMNS }}
        onChangeSearch={form.handleChange}
        onOpenModal={handleOnOpenModal}
        title="Managers"
      />
      <ModalDefault
        isOpen={openModal}
        formData={formData}
        title="New Affiliate Manager"
      />
    </>
  );
}

export default Manager;
