import React from 'react';
import { Legend, Title, Container } from './styles';

interface FieldsetProps {
  title?: string;
}

const Fieldset: React.FC<FieldsetProps> = (props) => {
  return (
    <Container>
      <Legend>
        <Title>{props.title}</Title>
      </Legend>
      {props.children}
    </Container>
  );
};

export default Fieldset;
