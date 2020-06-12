import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  margin: 0.2rem;
  padding: 1rem;
  min-height: 150px;
  width: 100%;

  &:hover {
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.23);
  }

  @media (max-width: 767px) {
    flex-direction: column;
    padding: 0.35rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Category = styled.p`
  color: lightgrey;
`;

export const Image = styled.img`
  border-radius: 3px;
  width: 120px;
  height: 100%;

  @media (max-width: 767px) {
    width: 100%;
    height: 15vh;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2%;
  width: 100%;
`;

export const Title = styled.h2`
  margin: 1px;
  font-weight: 500;

  @media (max-width: 767px) {
    margin: 0;
    font-weight: 400;
  }
`;

export const SubTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1px;
  font-weight: 500;
  color: grey;

  @media (max-width: 767px) {
    margin: 0;
    font-weight: 400;
  }
`;
