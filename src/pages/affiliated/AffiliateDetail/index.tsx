import { ReactElement, useState } from 'react';
import { Done as DoneIcon, Edit as EditIcon } from '@mui/icons-material';
import {
  ContainerInput,
  ContainerRoot,
  HeaderContainer,
} from '../../../commons/list/styles';
import { AFFILIATE_DETAILS_DATA } from '../../../mock';
import {
  PrimaryButton as SaveButton,
  SecondaryButton as EditButton,
  CancelButton,
} from '../../../utils/styles/Buttons';
import {
  ContainerButton,
  Fieldset,
  IconContainer,
  InputText,
  ScoreContainer,
  Subtitle,
  Row,
  Title,
  WebsitesContainer,
} from './styles';
import { ClearIcon } from '../../../utils/styles/Icons';
import { ColumnDefinitionType } from '../../../commons/types/types';
import { Table } from '@juniorv/dashboard-uitest';

export interface AffiliateDetailsRow {
  name: string;
  email: string;
  score: number;
  verificationDate: string;
  actions: ReactElement;
}

export const AFFILIATE_DETAILS_COLUMNS: ColumnDefinitionType<
  AffiliateDetailsRow,
  keyof AffiliateDetailsRow
>[] = [
  { header: 'Name', key: 'name' },
  { header: 'E-mail', key: 'email' },
  { header: 'Score', key: 'score', align: 'center' },
  { header: 'Verification Date', key: 'verificationDate' },
  { header: 'Actions', key: 'actions' },
];

function AffiliateDetail() {
  const email = 'it@magalu.com.br';
  const phone = '0800 2391-5812';

  const [isEdit, setIsEdit] = useState(false);
  const [newMail, setNewMail] = useState(email);
  const [newPhone, setNewPhone] = useState(phone);

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const onSave = () => {
    toggleEdit();
  };

  const onCancel = () => {
    toggleEdit();
    setNewMail(email);
  };

  const onChangeEmail = (event: any) => {
    setNewMail(event.target.value);
  };

  const onChangePhone = (event: any) => {
    setNewPhone(event.target.value);
  };

  return (
    <ContainerRoot>
      <Row>
        <Title>Magazine Luiza</Title>
        <ContainerButton>
          {isEdit ? (
            <>
              <CancelButton onClick={onCancel}>
                <IconContainer>
                  <ClearIcon transparent />
                </IconContainer>
                Cancel
              </CancelButton>
              <SaveButton onClick={onSave}>
                <IconContainer>
                  <DoneIcon />
                </IconContainer>
                Save
              </SaveButton>
            </>
          ) : (
            <EditButton onClick={toggleEdit}>
              <IconContainer>
                <EditIcon />
              </IconContainer>
              Edit
            </EditButton>
          )}
        </ContainerButton>
      </Row>
      <HeaderContainer>
        <ContainerInput>
          <Fieldset>
            <InputText
              value={newMail}
              onChange={onChangeEmail}
              legend="Email"
              disabled={!isEdit}
            />
          </Fieldset>
          <Fieldset>
            <InputText
              value={newPhone}
              onChange={onChangePhone}
              legend="Phone"
              disabled={!isEdit}
            />
          </Fieldset>
        </ContainerInput>
      </HeaderContainer>
      <WebsitesContainer>
        <Subtitle>Active websites</Subtitle>
        <Table
          columns={AFFILIATE_DETAILS_COLUMNS}
          data={AFFILIATE_DETAILS_DATA}
        />
      </WebsitesContainer>
      <ScoreContainer>Score Average: 20</ScoreContainer>
    </ContainerRoot>
  );
}

export default AffiliateDetail;
