import React, { useState, FormEvent } from 'react';
import logoimg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';
import Repository from '../Repository';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [newrepo, setNewrepo] = useState('');

  async function hadleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const response = await api.get<Repository>(`repos/${newrepo}`);

    const repository = response.data;
    setRepositories([...repositories, repository]);

    setNewrepo('');
  }

  return (
    <>
      <img src={logoimg} alt="Github Explorer" />
      <Title>Expore respositorios no github</Title>
      <Form action="form" onSubmit={hadleAddRepository}>
        <input
          value={newrepo}
          onChange={(e) => setNewrepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit" >Pesquisar</button>
      </Form>

      <Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name} href="teste">
            <img src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />

          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
