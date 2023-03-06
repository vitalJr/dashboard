import { ImageUpload } from '@juniorv/dashboard-uitest';
import {
  ContainerInputModal,
  ContainerSelectModal,
  SelectDefault,
  InputDefault,
} from './styles';

export interface DataForms {
  type: 'input' | 'select' | 'file';
  placeholder?: string;
  inputType?: 'text' | 'date' | 'radio' | 'password';
  name?: string;
  legend?: string;
  disabled?: boolean;
  required?: boolean;
  optionsList?: string[];
  value?: string;
  label?: string;
  onChange?: () => void;
}

export interface FormProps {
  formData: DataForms[];
}

const selectStyle = {
  background: '#e5e5e5',
  border: '1px solid #010101',
  height: '30px',
  maxWidth: '350px',
  borderRadius: '8px',
  marginBottom: '20px',
  color: '#000',
  fontWeight: '100',
  paddingLeft: '8px',
};

const renderField = (field: DataForms) => {
  if (field.type === 'select') {
    return (
      <ContainerSelectModal key={field.name}>
        <legend>{field?.legend}</legend>
        <SelectDefault
          options={field.optionsList}
          style={selectStyle}
          value={field.value}
          name={field.name}
          onChange={field.onChange}
        />
      </ContainerSelectModal>
    );
  }

  if (field.type === 'input') {
    return (
      <ContainerInputModal key={field.name}>
        <InputDefault
          type={field.inputType}
          size="full"
          legend={field.legend}
          placeholder={field.placeholder}
          disabled={field.disabled}
          value={field.value}
          name={field.name}
          id={field.name}
          onChange={field.onChange}
        />
      </ContainerInputModal>
    );
  }

  if (field.type === 'file') {
    return (
      <ContainerInputModal key={field.name}>
        <ImageUpload
          legend={field.legend}
          disabled={field.disabled}
          name={field.name}
          id={field.name}
          onChange={field.onChange}
        />
      </ContainerInputModal>
    );
  }

  return <ContainerInputModal />;
};

function Form({ formData }: FormProps) {
  return <>{formData.map((field) => renderField(field))}</>;
}

export default Form;
