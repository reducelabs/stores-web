import React from 'react';
import { Container, ProgressBar } from './styles';

interface ProgressProps {
  value: number;
}

const Progress: React.FC<ProgressProps> = (props) => {
  return (
    <Container>
      <ProgressBar value={props.value} />
    </Container>
  );
};

export default Progress;
