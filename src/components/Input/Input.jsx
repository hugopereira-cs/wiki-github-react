import { InputContainer } from './Input.styles';

export default function Input({ value, onChange }) {
  return (
    <InputContainer>
      <input value={value} onChange={onChange} />
    </InputContainer>
  );
}

// TODO: props validation