import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import IStore from './interfaces/store';
import {
  Container,
  Card,
  Image,
  CardContent,
  Title,
  Header,
  Category,
  Location,
} from './styles';
import Map from '../../components/Map';
import Maker from '../../components/Maker';

const ListStores: React.FC = () => {
  const [stores, setStores] = useState<IStore[]>([]);
  useEffect(() => {
    api.get<IStore[]>('/stores').then((response) => setStores(response.data));
  }, []);
  const store = {
    title: 'Americanas',
    image_url:
      'data:image/png;base64,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',
    delivery: false,
  };
  return (
    <Map zoom={15}>
      <Maker lat={-15.9088694} lng={-48.0704318} />
    </Map>
    // <Container>
    //   <Card>
    //     <Image src={store.image_url} />
    //     <CardContent>
    //       <Header>
    //         <Category>Categoria</Category>
    //         <Title>Americanas</Title>
    //       </Header>
    //       <Location>Taguatinga - DF</Location>
    //     </CardContent>
    //   </Card>
    //   {stores.map((store) => (
    //     <Card key={store.id}>
    //       <Image src={store.image_url} />
    //       <CardContent>
    //         <Header>
    //           <Category>Categoria</Category>
    //           <Title>{store.name}</Title>
    //         </Header>
    //         {store.city && store.uf && (
    //           <Location>
    //             {store.city} - {store.uf}
    //           </Location>
    //         )}
    //       </CardContent>
    //     </Card>
    //   ))}
    // </Container>
  );
};

export default ListStores;
