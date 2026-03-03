import PropTypes from 'prop-types';
import { ItemContainer } from './ItemRepo.styles';

export default function ItemRepo({ repo, handleRemoveRepo }) {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };

  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} rel="noreferrer" target="_blank">
        Ver repositório
      </a>
      <br />
      <a href="#" rel="noreferrer" className="remover" onClick={(e) => { e.preventDefault(); handleRemove(); }}>
        Remover
      </a>
      <hr />
    </ItemContainer>
  );
}

ItemRepo.propTypes = {
  repo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    full_name: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired
  }).isRequired,
  handleRemoveRepo: PropTypes.func.isRequired
};
