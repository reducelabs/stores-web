import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
  }
`;

export const Card = styled.div`
  margin: 5px;
  font-size: 1.5em;
  min-height: 100px;
  display: flex;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  @media screen and (max-width: 767px) {
    flex-direction: column;
    border-radius: 5px;
  }
`;

export const Image = styled.img`
  border-radius: 3px;
  width: 120px;
  height: 100%;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 18vh;
    border-radius: 8px 8px 0px 0px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  margin: 0.5rem;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media (max-width: 767px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Category = styled.h4`
  color: lightgrey;
  font-weight: 300;
  font-size: 0.8rem;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 1.3rem;

  @media (max-width: 767px) {
    margin: 0;
    font-weight: 400;
    font-size: 1rem;
  }
`;

export const Location = styled.h3`
  display: flex;
  font-weight: 400;
  font-size: 0.9rem;
  color: grey;

  @media (max-width: 767px) {
    font-weight: 300;
  }
`;

// export const CardContainer = styled.div`
//   flex: 1 0 auto;
// `;

// export const MapContainer = styled.div`
//   flex: 5 0 auto;
//   @media screen and (max-width: 1024px) {
//     display: none;
//   }
// `;

// export const Title = styled.h2`
//   margin 1px;
// `;
