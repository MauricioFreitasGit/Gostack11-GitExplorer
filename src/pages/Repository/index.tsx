import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Header, RepositoryInfo, Issues } from './styles';
import logoimg from '../../assets/logo.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

interface Issue {
  title: string;
  id: number;
  user: {
    login: string;
  }
  html_url:string;

}

const Repository: React.FC = () => {
  const [respository, setRepository] = useState<Repository | null>(null);

  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();
  console.log(params.repository);

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(response => {
      setRepository(response.data);
    })
    api.get(`repos/${params.repository}/issues`).then(response => {
      setIssues(response.data);
    })

  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoimg} alt="Githugb Explorer" />
        <Link to="/dashboard">
          <FiChevronLeft size={16} />
        Voltar
      </Link>
      </Header>
      {respository &&

        <RepositoryInfo>
          <header>
            <img src={respository.owner.avatar_url}
              alt={respository.owner.login}
            />
            <div>
              <strong>{respository.full_name}</strong>
              <p>{respository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{respository.stargazers_count}</strong>
              <span>Starts</span>
            </li>
            <li>
              <strong>{respository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{respository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      }
      <Issues>
        {issues.map(response => (
          <a key={response.id} href={response.html_url} >
            <div>
        <strong>{response.title}</strong>
        <p>{response.user.login}</p>
            </div>
            <FiChevronRight size={20} />

          </a>
        ))}
      </Issues>
    </>
  );

}

export default Repository;
