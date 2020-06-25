import React from 'react';
import { Container } from './styles';
import { FaFish } from 'react-icons/fa';
import { MdShoppingCart } from 'react-icons/md';
import { GiMedicines } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import { ECategory } from './ECategory';

interface MakerProps {
  lat: number;
  lng: number;
}

const Maker: React.FC<MakerProps> = (props) => {
  function getIconTypeCategory(category: ECategory) {
    switch (category) {
      case ECategory.Fishmonger:
        return <FaFish />;
      case ECategory.Supermarket:
        return <MdShoppingCart />;
      case ECategory.Lottery:
        return <MdShoppingCart />;
      case ECategory.Drugstore:
        return <GiMedicines />;
      default:
        break;
    }
  }
  return (
    <Container>
      <IconContext.Provider
        value={{
          size: '22px',
        }}
      >
        {getIconTypeCategory(ECategory.Drugstore)}
      </IconContext.Provider>
    </Container>
  );
};

export default Maker;
