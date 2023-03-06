import { useFormik } from 'formik';
import { ReactElement, useState } from 'react';
import { LINK_DATA } from '../../mock';
import linksForm from './forms';
import ListScreen from '../../commons/list';
import ModalDefault from '../../commons/modal';
import { ColumnDefinitionType } from '../../commons/types/types';

export interface LinkRow {
  name: string;
  hyperlink: string;
  initialDate: string;
  endDate: number;
  seasonal: string;
  score: number;
  actions: ReactElement;
}

const TABLE_COLUMNS: ColumnDefinitionType<LinkRow, keyof LinkRow>[] = [
  { key: 'name', header: 'Name' },
  { key: 'hyperlink', header: 'Hyperlink' },
  { key: 'initialDate', header: 'Initial Date' },
  { key: 'endDate', header: 'End Date' },
  { key: 'seasonal', header: 'Seasonal', align: 'center' },
  { key: 'score', header: 'Score', align: 'center' },
  { key: 'actions', header: 'Actions', align: 'center' },
];
function Links() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOnSubmit = () => {};

  const form = useFormik({
    initialValues: {
      selectAffiliate: '',
      linkUrl: '',
      startDate: '',
      endDate: '',
    },
    onSubmit: handleOnSubmit,
  });

  const handleOnOpenModal = () => {
    setOpenModal(!openModal);
  };

  const formData = linksForm(form);

  return (
    <>
      <ListScreen
        table={{ data: LINK_DATA, columns: TABLE_COLUMNS }}
        onChangeSearch={form.handleChange}
        onOpenModal={handleOnOpenModal}
        title="Links"
      />
      <ModalDefault
        isOpen={openModal}
        onClose={handleOnOpenModal}
        formData={formData}
        title="New Link"
      />
    </>
  );
}

export default Links;
