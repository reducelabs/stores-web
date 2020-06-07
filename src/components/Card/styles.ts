import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: 2px;
  min-width: 100px;
  min-height: 30px;
  width: 500px;
  height: 150px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  margin: 0.2rem;
  padding: 1rem;

  &:hover {
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.16), 0 2px 4px rgba(0,0,0,0.23);
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Category = styled.p`
  color: lightslategray;
  font-size: 14px;
`;

export const Image = styled.img`
  border-radius: 3px;
  width: 120px;
  height: 100%;
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
  font-size: 28px;
`;

export const SubTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1px;
  font-weight: 500;
  font-size: 16px;
  color: grey;
`;
