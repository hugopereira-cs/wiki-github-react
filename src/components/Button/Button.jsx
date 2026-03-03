import { ButtonContainer } from './Button.styles';
import PropTypes from 'prop-types';

export default function Button({ onClick, loading, label, variant }) {
  return (
    <ButtonContainer onClick={onClick} disabled={loading} variant={variant}>
      {loading ? 'Buscando...' : label}
    </ButtonContainer>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'danger'])
};
