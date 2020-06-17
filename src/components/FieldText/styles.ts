import styled from 'styled-components';

export const Field = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  background: #fff;
  border-radius: 8px;
  border: 1px solid #f0f0f5;
  padding: 16px 24px;
  font-size: 16px;
  color: #6c6c80;

  ::placeholder {
    color: #a0a0b2;
  }

  :focus-within {
    outline-color: ${(props) => props.theme.colors.primary};
  }
`;
