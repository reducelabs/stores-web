import styled from 'styled-components';

export const Container = styled.button`
  padding: 15px 30px;
  border: 0;
  outline: none;
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.2s ease;
  font-size: 22px;
  font-weight: bold;
`;
