import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Header,RepositoryInfo,Issues } from './styles';
import logoimg from '../../assets/logo.svg';
import { FiChevronLeft,FiChevronRight } from 'react-icons/fi';


interface RepositoryParams {
  repository: string;
}
const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  console.log(params.repository);

  return (
    <>
    <Header>
      <img src={logoimg} alt="Githugb Explorer" />
      <Link to="/dashboard">
        <FiChevronLeft size={16} />
        Voltar
      </Link>
    </Header>
    <RepositoryInfo>
      <header>
        <img src="https://avatars0.githubusercontent.com/u/46382799?s=88&u=60ed2d1401dbd75e793ba7cd847a31c3e7372410&v=4" alt="Rockeat"></img>
        <div>
          <strong>Rockeat/unform</strong>
          <p>Descriçao do repos</p>
        </div>
      </header>
      <ul>
        <li>
          <strong>1800</strong>
          <span>Starts</span>
        </li>
        <li>
          <strong>46</strong>
          <span>Forks</span>
        </li>
        <li>
          <strong>67</strong>
          <span>Issues abertas</span>
        </li>
      </ul>
    </RepositoryInfo>
    <Issues>
          <Link to="asdas">
            <div>
              <strong>sdda</strong>
              <p>adssdas</p>
            </div>
            <FiChevronRight size={20} />

          </Link>
    </Issues>
    </>
  );

}

export default Repository;
