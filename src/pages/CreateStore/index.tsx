import React from 'react';
import Header from '../../components/Header';
import { Container } from './styles';
import FieldText from '../../components/FieldText';
import Form from '../../components/Form';
import Fieldset from '../../components/Fieldset';

const CreateStore = () => {
  return (
    <Container>
      <Header />
      <Form title='Cadastre seu negócio'>
        <Fieldset title='Dados Pessoais'>
          <FieldText
            id='nome'
            label='Nome Completo'
            name='nome'
            placeholder='Digite o seu nome completo'
            required
          />
          <FieldText
            id='email'
            type='email'
            label='Email'
            name='email'
            placeholder='email@email.com'
            required
          />
          <FieldText
            id='phone'
            label='Celular'
            name='phone'
            placeholder='(00) 00000 0000'
            required
          />
        </Fieldset>
      </Form>
    </Container>
  );
};

export default CreateStore;
