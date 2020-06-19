import styled from 'styled-components';

export const Container = styled.div`
  height: 8px;
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 4px;
`;

export const ProgressBar = styled('div')<{ value: number }>`
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.primary} ${(props) => props?.value}%,
    transparent 0
  );
  width: 100%;
  height: 8px;
  border-radius: 4px;
`;
