import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
`;

export const Form = styled.form`
  margin: 80px auto;
  padding: 64px;
  max-width: 730px;
  background: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 36px;
`;

export const Fieldset = styled.fieldset`
  margin-top: 64px;
  min-inline-size: auto;
  border: 0;
`;

export const Legend = styled.legend`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const TitleForm = styled.h2`
  font-size: 24px;
`;

export const Field = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const Input = styled.input`
  flex: 1;
  background: #f0f0f5;
  border-radius: 8px;
  border: 0;
  padding: 16px 24px;
  font-size: 16px;
  color: #6c6c80;

  ::placeholder {
    color: #a0a0b2;
  }
`;

export const Textarea = styled.textarea`
  flex: 1;
  background: #f0f0f5;
  border-radius: 8px;
  border: 0;
  padding: 16px 24px;
  font-size: 16px;
  color: #6c6c80;

  ::placeholder {
    color: #a0a0b2;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
`;

export const ButtonWhatsapp = styled.button`
  width: 100%;
  max-width: 360px;
  height: 58px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  border: 0;
  text-decoration: none;

  display: flex;
  align-items: center;
  overflow: hidden;

  margin-top: 40px;
`;

export const IconButton = styled.span`
  display: block;
  background: rgba(0, 0, 0, 0.08);
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2;
`;

export const TextButton = styled.strong`
  flex: 1;
  text-align: center;
  color: #fff;
`;
