import { ItemContainer } from './ItemRepo.styles';

export default function ItemRepo() {
  return (
    <ItemContainer>
      <h3>Olá</h3>
      <p>Mundo</p>
      <a href="#">Ver repositório</a>
      <br />
      <a href="#" className="remover">Remover</a>
      <hr />
    </ItemContainer>
  );
}
