import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  height: 10vh;
`;

export const Logo = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-size: 32px;
  font-weight: 700;
  margin: 10px 58px;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 54px;
  line-height: 64px;
  margin-bottom: 24px;
`;

export const TitleHighlight = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;

export const SubTitle = styled.p`
  font-size: 24px;
  line-height: 38px;
`;

export const Content = styled.main`
  width: 672px;
  margin: 200px 250px;
  display: flex;
  flex-direction: column;
  justify-self: center;
`;

export const LinkRegister = styled(Link)`
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
