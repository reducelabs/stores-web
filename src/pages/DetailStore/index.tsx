import React, { FormEvent, useState, ChangeEvent, useEffect } from 'react';
import {
  Container,
  IconButton,
  TextButton,
  Form,
  Title,
  Fieldset,
  Legend,
  TitleForm,
  Input,
  Label,
  Field,
  Textarea,
  ButtonWhatsapp,
} from './styles';
import { FaWhatsapp } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import api from '../../services/api';

const DetailStore = () => {
  const [store, setStore] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  // useEffect(() => {
  //   api.get(`stores/${1}`).then((response) => setStore(response.data));
  // }, []);
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleTextareaChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const { name, email, message } = formData;
    const data = {
      name,
      email,
      message,
    };

    const textMessage = `
Olá Quero Mais.
Estou entrando em contato por meio do *Peek*.

*Informações de Contato*
Nome: Fulano.
Email: email@email.com.
CEP: 72640401.
Cidade/UF: Brasília/DF.
Bairro: Recanto das Emas.
Endereço: Quadra 604 conjunto 1, 18 ${
      true ? ' - Complemento: Portão Vinho' : ''
    }.\n
${formData.message}
`;
    await api.post('store/send-message', data);

    window.open(
      `https://api.whatsapp.com/send?phone=5543984513741&text=${window.encodeURIComponent(
        textMessage
      )}`,
      '_blank'
    );
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Entrar em contato com um vendedor</Title>
        <Fieldset>
          <Legend>
            <TitleForm>Dados</TitleForm>
          </Legend>
          <Field>
            <Label htmlFor='name'>Nome</Label>
            <Input
              type='text'
              id='name'
              name='name'
              placeholder='Digite o seu nome'
              onChange={handleInputChange}
            />
          </Field>
          <Field>
            <Label htmlFor='email'>Email</Label>
            <Input
              type='email'
              id='email'
              name='email'
              placeholder='email@email.com'
              onChange={handleInputChange}
            />
          </Field>
        </Fieldset>
        <Fieldset>
          <Legend>
            <TitleForm>Endereço</TitleForm>
          </Legend>
          <Field>
            <Label htmlFor='cep'>CEP</Label>
            <Input type='text' id='cep' name='cep' placeholder='000000-000' />
          </Field>
          <Field>
            <Label htmlFor='location'>Cidade/Estado (UF)</Label>
            <Input type='text' id='location' name='location' />
          </Field>
          <Field>
            <Label htmlFor='neighborhood'>Bairro</Label>
            <Input type='text' id='neighborhood' name='neighborhood' />
          </Field>
          <Field>
            <Label htmlFor='address'>Endereço</Label>
            <Input type='text' id='address' name='address' />
          </Field>
          <Field>
            <Label htmlFor='number'>Número</Label>
            <Input type='text' id='number' name='number' />
          </Field>
          <Field>
            <Label htmlFor='complement'>Complemento</Label>
            <Input type='text' id='complement' name='complement' />
          </Field>
        </Fieldset>
        <Fieldset>
          <Legend>
            <TitleForm>Mensagem</TitleForm>
          </Legend>
          <Field>
            <Label htmlFor='message'>Mensagem</Label>
            <Textarea
              id='message'
              name='message'
              placeholder=''
              rows={6}
              cols={30}
              onChange={handleTextareaChange}
            />
          </Field>
        </Fieldset>
        <ButtonWhatsapp type='submit'>
          <IconContext.Provider
            value={{
              color: 'white',
              size: '20px',
            }}
          >
            <IconButton>
              <FaWhatsapp />
            </IconButton>
          </IconContext.Provider>
          <TextButton>Falar com o vendedor</TextButton>
        </ButtonWhatsapp>
      </Form>
    </Container>
  );
};

export default DetailStore;
