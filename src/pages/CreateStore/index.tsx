import React, { FormEvent, useState, ChangeEvent } from 'react';
import Header from '../../components/Header';
import { Container, TermsText } from './styles';
import FieldText from '../../components/FieldText';
import Form from '../../components/Form';
import Fieldset from '../../components/Fieldset';
import Button from '../../components/Button';
import api from '../../services/api';

const CreateStore = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    store: {
      companyName: '',
      name: '',
      cnpj: '',
    },
  });
  const [storeFormData, setStoreFormData] = useState({
    companyName: '',
    name: '',
    cnpj: '',
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const { name, email, phone } = formData;
    const data = {
      name,
      email,
      phone,
    };
    await api.post('stores', data);
  }

  return (
    <Container>
      <Form title='Cadastre seu negócio' onSubmit={handleSubmit}>
        <Fieldset title='Dados pessoais'>
          <FieldText
            id='name'
            label='Nome Completo'
            name='name'
            placeholder='Digite o seu nome completo'
            value={formData.name}
            required
            onChange={handleInputChange}
          />
          <FieldText
            id='email'
            type='email'
            label='Email'
            name='email'
            placeholder='email@email.com'
            value={formData.email}
            required
            onChange={handleInputChange}
          />
          <FieldText
            id='phone'
            label='Celular'
            name='phone'
            placeholder='(00) 00000 0000'
            value={formData.phone}
            required
            onChange={handleInputChange}
          />
        </Fieldset>
        {/* <Fieldset title='Dados do negócio'>
          <FieldText
            id='cnpj'
            label='CNPJ'
            name='store.cnpj'
            placeholder='00.000.000/0000-00'
            value={storeFormData.cnpj}
            onChange={handleInputChange}
          />
          <FieldText
            id='companyName'
            label='Razão Social'
            name='store.companyName'
            placeholder='Digite a razão social'
            value={storeFormData.companyName}
            onChange={handleInputChange}
          />
          <FieldText
            id='name'
            label='Nome da Loja'
            name='store.name'
            placeholder='Digite o nome da loja'
            value={storeFormData.name}
            onChange={handleInputChange}
          />
        </Fieldset> */}
        <TermsText>
          Ao continuar, estou de acordo que o Peek entre em contato comigo por
          telefone, e-mail ou WhatsApp (incluindo mensagens automáticas para
          fins comerciais).
        </TermsText>
        <Button type='submit'>Cadastrar loja</Button>
      </Form>
    </Container>
  );
};

export default CreateStore;
