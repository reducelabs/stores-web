import React from 'react';
import { Container } from './styles';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  color?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <Container type={props?.type}>
      <span>{props?.children}</span>
    </Container>
  );
};

export default Button;
