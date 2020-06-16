import React from 'react';
import {
  Container,
  Header,
  Logo,
  Title,
  SubTitle,
  Content,
  LinkRegister,
  TextButton,
  IconButton,
  TitleHighlight,
} from './styles';
import { IconContext } from 'react-icons';
import { FaSignInAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <Container>
      <Header>
        <Logo>Peek</Logo>
      </Header>
      <Content>
        <Title>
          O seu <TitleHighlight>negócio local</TitleHighlight> acessível de
          novas formas
        </Title>
        <SubTitle>
          Estar diponível para os clientes presencialmente e online nunca foi
          tão fácil, amplie o seu negócio com a localizando da loja e exposição
          dos produtos.
        </SubTitle>
        <LinkRegister to='loja/cadastrar'>
          <IconContext.Provider
            value={{
              color: 'white',
              size: '20px',
            }}
          >
            <IconButton>
              <FaSignInAlt />
            </IconButton>
          </IconContext.Provider>
          <TextButton>Cadastre a sua loja</TextButton>
        </LinkRegister>
      </Content>
    </Container>
  );
};

export default Home;
