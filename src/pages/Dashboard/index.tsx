import React from 'react';
import logoimg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';

import Repository from '../Repository';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoimg} alt="Github Explorer" />
      <Title>Expore respositorios no github</Title>
      <Form action="form">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit" >Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars0.githubusercontent.com/u/46382799?s=460&u=60ed2d1401dbd75e793ba7cd847a31c3e7372410&v=4"
            alt="Mauricio Freitas"
          />
            <div>
              <strong>mapa-ios-react</strong>
              <p>Esse repositório tem como objetivo instruir a realizar a instalação do Maps do iOS e rodar ele em seu dispositivo</p>
            </div>
            <FiChevronRight size={20}/>

        </a>
        <a href="teste">
          <img src="https://avatars0.githubusercontent.com/u/46382799?s=460&u=60ed2d1401dbd75e793ba7cd847a31c3e7372410&v=4"
            alt="Mauricio Freitas"
          />
            <div>
              <strong>mapa-ios-react</strong>
              <p>Esse repositório tem como objetivo instruir a realizar a instalação do Maps do iOS e rodar ele em seu dispositivo</p>
            </div>
            <FiChevronRight size={20}/>

        </a>
        <a href="teste">
          <img src="https://avatars0.githubusercontent.com/u/46382799?s=460&u=60ed2d1401dbd75e793ba7cd847a31c3e7372410&v=4"
            alt="Mauricio Freitas"
          />
            <div>
              <strong>mapa-ios-react</strong>
              <p>Esse repositório tem como objetivo instruir a realizar a instalação do Maps do iOS e rodar ele em seu dispositivo</p>
            </div>
            <FiChevronRight size={20}/>

        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
