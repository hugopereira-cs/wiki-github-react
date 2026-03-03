import { ButtonContainer } from './Button.styles';

export default function Button({ onClick, loading, label, variant }) {
  return (
    <ButtonContainer onClick={onClick} disabled={loading} variant={variant}>
      {loading ? 'Buscando...' : label}
    </ButtonContainer>
  );
}
