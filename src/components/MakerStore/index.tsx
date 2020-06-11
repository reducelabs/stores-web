import React from 'react';
import { Maker } from './styles';

const MakerStore = (props: any) => {
    const { name } = props;
    return (
      <Maker
        title={name}
      />
    );
  };

  export default MakerStore;