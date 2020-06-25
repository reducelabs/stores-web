import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 94vh;

  @media (max-width: 767px) {
    height: 100%;
  }
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 54px;
  line-height: 64px;
  margin-bottom: 24px;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 32px;
    line-height: 42px;
    margin-bottom: 14px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 34px;
    line-height: 48px;
    margin-bottom: 18px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 34px;
    line-height: 48px;
    margin-bottom: 18px;
  }
`;

export const TitleHighlight = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;

export const SubTitle = styled.p`
  font-size: 24px;
  line-height: 38px;
  color: grey;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 16px;
    line-height: 28px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 18px;
    line-height: 32px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 20px;
    line-height: 36px;
  }
`;

export const Content = styled.main`
  display: flex;
  height: 100%;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const IllustrationImage = styled.img`
  width: 480px;
  margin: 0 120px;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 250px;
    margin: 30px 120px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 320px;
    margin: 40px 0 30px 0;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 300px;
    margin: 0 52px;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 120px;

  @media (min-width: 320px) and (max-width: 480px) {
    margin: 30px 40px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    margin: 30px 62px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: 62px;
  }
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
