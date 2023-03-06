import {
  ContainerButtonModal,
  ContainerModal,
  ModalForm,
  BoxForm,
  Title,
} from './styles';
import Form, { DataForms } from '../form';
import {
  CancelButton,
  PrimaryButton as SaveButton,
} from '../../utils/styles/Buttons';

interface ModalProps {
  title: string;
  isOpen: boolean;
  formData?: DataForms[];
  onClose?: () => void;
  onSave?: () => void;
}

function ModalDefault({
  title,
  isOpen,
  onClose,
  formData,
  onSave = () => {},
}: ModalProps) {
  const handleCancel = (): void => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <ModalForm
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <BoxForm>
        <Title id="modal-modal-title">{title}</Title>
        <ContainerModal>
          {formData && <Form formData={formData} />}
          <ContainerButtonModal>
            <CancelButton onClick={handleCancel}>Cancel</CancelButton>
            <SaveButton onClick={onSave}>Save</SaveButton>
          </ContainerButtonModal>
        </ContainerModal>
      </BoxForm>
    </ModalForm>
  );
}

export default ModalDefault;
