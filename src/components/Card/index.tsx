import React from 'react';
import {
  Container,
  Title,
  SubTitleContainer,
  CardContent,
  Category,
  Image,
  Header,
} from './styles';
import { BsDot } from 'react-icons/bs';

interface CardProps {
  name: string;
  image_url?: string;
  category: string;
  city: string;
  uf: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <Container>
      <Image src={'https://via.placeholder.com/300'} alt={props.name} />
      <CardContent>
        <Header>
          <Category>{props.category}</Category>
        </Header>
        <Title>{props.name}</Title>
        <SubTitleContainer>
          <p>1.4 km</p>
          <BsDot />
          <p>
            {props.city} - {props.uf}
          </p>
        </SubTitleContainer>
      </CardContent>
    </Container>
  );
};

export default Card;
