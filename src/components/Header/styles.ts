import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  height: 6vh;
`;

export const Logo = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-size: 32px;
  font-weight: 700;
  margin: 10px 58px;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 28px;
    font-weight: 600;
    margin: 10px 38px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 28px;
    font-weight: 600;
    margin: 10px 42px;
  }
`;
