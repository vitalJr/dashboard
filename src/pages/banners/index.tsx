import { useFormik } from 'formik';
import { ReactElement, useState } from 'react';
import ListScreen from '../../commons/list';
import ModalDefault from '../../commons/modal';
import { ColumnDefinitionType } from '../../commons/types/types';

import { BANNER_DATA, MANAGER_DATA } from '../../mock';
import bannerForm from './forms';

export interface BannerRow {
  affiliate: string;
  name: string;
  creationDate: string;
  endDate: string;
  seasonal: string;
  visits: number;
  score: number;
  actions: ReactElement;
}

const TABLE_COLUMNS: ColumnDefinitionType<BannerRow, keyof BannerRow>[] = [
  { key: 'name', header: 'Name' },
  { key: 'affiliate', header: 'Affiliate' },
  { key: 'creationDate', header: 'Creation Date' },
  { key: 'endDate', header: 'End Date' },
  { key: 'seasonal', header: 'Seasonal' },
  { key: 'visits', header: 'Visits', align: 'center' },
  { key: 'score', header: 'Score', align: 'center' },
  { key: 'actions', header: 'Actions', align: 'center' },
];

function Banner() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOnSubmit = () => {};

  const form = useFormik({
    initialValues: {
      selectAffiliate: MANAGER_DATA.map((d) => d.name).sort()[0],
      inputLink: File,
      creationDate: '',
      endDate: '',
      isSeasonal: false,
    },
    onSubmit: handleOnSubmit,
  });

  const handleOnOpenModal = () => {
    setOpenModal(!openModal);
  };

  const formData = bannerForm(form);

  return (
    <>
      <ListScreen
        table={{ data: BANNER_DATA, columns: TABLE_COLUMNS }}
        onChangeSearch={form.handleChange}
        onOpenModal={handleOnOpenModal}
        title="Banners"
      />
      <ModalDefault
        isOpen={openModal}
        onClose={handleOnOpenModal}
        formData={formData}
        title="New Banner"
      />
    </>
  );
}

export default Banner;
