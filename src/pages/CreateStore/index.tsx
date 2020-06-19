import React, { FormEvent, useState, ChangeEvent, useEffect } from 'react';
import Header from '../../components/Header';
import { Container, TermsText } from './styles';
import FieldText from '../../components/FieldText';
import Form from '../../components/Form';
import Fieldset from '../../components/Fieldset';
import Button from '../../components/Button';
import api from '../../services/api';
import Progress from '../../components/Progress';

const CreateStore = () => {
  const [step, setStep] = useState<number>(0);
  const [progress, setProgress] = useState<number>(progressValue);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    username: '',
    password: '',
  });
  const [storeFormData, setStoreFormData] = useState({
    companyName: '',
    name: '',
    cnpj: '',
  });

  useEffect(() => {
    setProgress(progressValue());
  }, [step]);

  function handleInputChangePersonal(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleInputChangeStore(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setStoreFormData({ ...storeFormData, [name]: value });
  }

  function handleStepChange() {
    setStep(step + 1);
  }

  function progressValue(): number {
    return ((step + 1) / 4) * 100;
  }

  function handleDisabledStep(): boolean {
    return false;
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = {
      ...formData,
      store: {
        ...storeFormData,
      },
    };
    await api.post('stores', data);
  }

  return (
    <Container>
      <Progress value={progress} />
      <Form title='Cadastre seu negócio' onSubmit={handleSubmit}>
        {step === 0 && (
          <>
            <Fieldset title='Dados pessoais'>
              <FieldText
                id='name'
                type='text'
                label='Nome Completo'
                name='name'
                placeholder='Digite seu nome completo'
                value={formData.name}
                required
                onChange={handleInputChangePersonal}
              />
              <FieldText
                id='email'
                type='email'
                label='Email'
                name='email'
                placeholder='email@email.com'
                value={formData.email}
                required
                onChange={handleInputChangePersonal}
              />
              <FieldText
                id='phone'
                type='text'
                label='Celular'
                name='phone'
                placeholder='(00) 00000 0000'
                value={formData.phone}
                required
                onChange={handleInputChangePersonal}
              />
            </Fieldset>
            <TermsText>
              Ao continuar, estou de acordo que o Peek entre em contato comigo
              por telefone, e-mail ou WhatsApp (incluindo mensagens automáticas
              para fins comerciais).
            </TermsText>
            <Button type='button' onClick={handleStepChange} disabled={true}>
              Continuar
            </Button>
          </>
        )}
        {step === 1 && (
          <>
            <Fieldset title='Dados do negócio'>
              <FieldText
                id='cnpj'
                type='text'
                label='CNPJ'
                name='cnpj'
                placeholder='00.000.000/0000-00'
                value={storeFormData.cnpj}
                onChange={handleInputChangeStore}
              />
              <FieldText
                id='companyName'
                label='Razão Social'
                name='companyName'
                placeholder='Digite a razão social'
                value={storeFormData.companyName}
                onChange={handleInputChangeStore}
              />
              <FieldText
                id='store-name'
                type='text'
                label='Nome da Loja'
                name='name'
                placeholder='Digite o nome da loja'
                value={storeFormData.name}
                onChange={handleInputChangeStore}
              />
            </Fieldset>
            <Button type='button' onClick={handleStepChange}>
              Continuar
            </Button>
          </>
        )}
        {step === 2 && (
          <>
            <Fieldset title='Dados do acesso'>
              <FieldText
                id='username'
                type='text'
                label='Nome de Usuário'
                name='username'
                value={formData.username}
                placeholder='Digite seu nome de usuário'
                onChange={handleInputChangePersonal}
              />
              <FieldText
                id='email'
                type='email'
                label='Email'
                name='email'
                value={formData.email}
                required
                disabled
                onChange={handleInputChangePersonal}
              />
              <FieldText
                id='password'
                type='password'
                label='Senha'
                name='password'
                placeholder='Digite sua senha'
                value={formData.password}
                onChange={handleInputChangePersonal}
              />
            </Fieldset>
            <Button type='submit'>Concluir</Button>
          </>
        )}
      </Form>
    </Container>
  );
};

export default CreateStore;
