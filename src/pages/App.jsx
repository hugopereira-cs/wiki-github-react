import { useState } from 'react';
import gitLogo from '../assets/github.png';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import ItemRepo from '../components/ItemRepo/ItemRepo';
import { api } from '../services/api';

import { Container } from './styles';

export function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  /* Conexão com a API usando o método get, e fazendo uso do camainho padrão presente em "api", passando somente o restante do endereço. */
  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);
      /* Se "data" existe, concatena tudo com "data" */
      if (data.id) {
        const isExist = repos.find((repo) => repo.id === data.id);
        if (!isExist) {
          setRepos((prev) => [...prev, data]);
          setCurrentRepo('');
          return;
        }
      }
    } catch (error) {
      alert('Repositório não encontrado!', error);
    }
  };

  const handleRemoveRepo = (id) => {
    setRepos((prev) => prev.filter((repo) => repo.id !== id));
  };

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="Logo do GitHub" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} key={repo.id} />
      ))}
    </Container>
  );
}
