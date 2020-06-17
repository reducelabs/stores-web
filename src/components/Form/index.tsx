import React, { FormEvent } from 'react';
import { Container, Title, SubTitle } from './styles';

interface FormProps {
  title?: string;
  subTitle?: string;
  onSubmit?: (event: FormEvent<Element>) => void | Promise<void>;
}

const Form: React.FC<FormProps> = (props) => {
  return (
    <Container onSubmit={props.onSubmit}>
      <Title>
        <strong>{props?.title}</strong>
      </Title>
      <SubTitle>{props?.subTitle}</SubTitle>
      {props?.children}
    </Container>
  );
};

export default Form;
