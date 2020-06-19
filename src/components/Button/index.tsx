import React, { MouseEvent } from 'react';
import { Container } from './styles';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  color?: string;
  disabled?: boolean;
  onClick?:
    | ((
        event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
      ) => void)
    | undefined;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <Container
      onClick={props.onClick}
      type={props?.type}
      disabled={props?.disabled}
    >
      <span>{props?.children}</span>
    </Container>
  );
};

export default Button;
