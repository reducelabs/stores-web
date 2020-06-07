import React from 'react';
import { Container, Title, SubTitleContainer, CardContent, Category, Image, Header } from './styles';
import { BsDot } from 'react-icons/bs';
import { GrDeliver } from 'react-icons/gr';
import { IconContext } from 'react-icons';


interface CardProps {
  title: string;
  image_url?: string;
  delivery: boolean;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <Container>
      <Image src={ props.image_url } alt={ props.title } />
      <CardContent>
        <Header>
          <Category>
            Eletrônicos
          </Category>
          <IconContext.Provider value={{ color: 'red' }}>
            <div>
              <GrDeliver />
            </div>
          </IconContext.Provider>
        </Header>
        <Title>
          { props.title }
        </Title>
        <SubTitleContainer>
          <p>1.4 km</p>
          <BsDot />
          <p>Taguating - DF</p>
        </SubTitleContainer>
      </CardContent>
    </Container>
  );
}

export default Card;