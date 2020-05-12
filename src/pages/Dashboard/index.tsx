import React, { useState, useEffect, FormEvent } from 'react';
import logoimg from '../../assets/logo.svg';
import { Title, Form, Repositories, Error } from './styles';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';
import Repository from '../Repository';
import { Link } from 'react-router-dom';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {

  const [repositories, setRepositories] = useState<Repository[]>(()=>{
    const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories');

    if(storagedRepositories){
      return JSON.parse(storagedRepositories);
    }else{
      return [];
    }
  });
  const [inputerror, setInputerror] = useState('');
  const [newrepo, setNewrepo] = useState('');

  useEffect(() => {

    localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories));
  }, [repositories]);

  async function hadleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!newrepo) {
      setInputerror('Digite o autor/nome do repositório');
      return;
    }
    try {
      const response = await api.get<Repository>(`repos/${newrepo}`);

      const repository = response.data;
      setRepositories([...repositories, repository]);

      setNewrepo('');
      setInputerror('');
    } catch (err) {
      setInputerror('Erro na busca por esse respositório');
    }
  }


  return (
    <>
      <img src={logoimg} alt="Github Explorer" />
      <Title>Expore respositorios no github</Title>
      <Form hasError={!!inputerror} action="form" onSubmit={hadleAddRepository}>
        <input
          value={newrepo}
          onChange={(e) => setNewrepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit" >Pesquisar</button>
      </Form>
      {inputerror && <Error>{inputerror}</Error>}


      <Repositories>
        {repositories.map(repository => (
          <Link key={repository.full_name} to={`/repositories/${repository.full_name}`}>
            <img src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />

          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
