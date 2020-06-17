import React from 'react';
import {
  Container,
  Title,
  SubTitle,
  Content,
  LinkRegister,
  TextButton,
  IconButton,
  TitleHighlight,
  Information,
  IllustrationImage,
} from './styles';
import { IconContext } from 'react-icons';
import { FaSignInAlt } from 'react-icons/fa';
import Illustration from '../../assets/illustration-3.svg';
import Header from '../../components/Header';

const Home = () => {
  return (
    <Container>
      <Header />
      <Content>
        <IllustrationImage src={Illustration} alt='Ilustração' />
        <Information>
          <Title>
            O seu <TitleHighlight>negócio local</TitleHighlight> acessível de
            novas formas
          </Title>
          <SubTitle>
            Estar diponível para os clientes presencialmente e online nunca foi
            tão fácil, amplie o seu negócio com a localizando da loja e
            exposição dos produtos.
          </SubTitle>
          <LinkRegister to='/cadastrar-loja'>
            <IconContext.Provider
              value={{
                color: 'white',
                size: '18px',
              }}
            >
              <IconButton>
                <FaSignInAlt />
              </IconButton>
            </IconContext.Provider>
            <TextButton>Cadastre a sua loja</TextButton>
          </LinkRegister>
        </Information>
      </Content>
    </Container>
  );
};

export default Home;
