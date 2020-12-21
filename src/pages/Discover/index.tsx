import React from 'react';
import { FlatList } from 'react-native';

import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Title from '../../components/Title';
import DiscoverChannels from '../../components/DiscoverChannels';
import DiscoverList from '../../components/DiscoverList';

import { Container, Wrapper, Main } from './styles';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Discover: React.FC = () => {
  const { data, indices } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Descubra</Heading>,
      },

      {
        key: 'SUGGESTED_CATEGORIES',
        render: () => <Title>Categorias que achamos que vai gostar</Title>,
        isTitle: true,
      },
      { key: 'C1', render: () => <DiscoverList /> },

      {
        key: 'SUGGESTED_CHANNELS',
        render: () => <Title>Canais ao vivo que achamos que vai gostar</Title>,
        isTitle: true,
      },
      { key: 'C2', render: () => <DiscoverChannels /> },

      {
        key: 'SMALL_COMMUNITIES',
        render: () => <Title>Comunidades pequenas que achamos que vai gostar</Title>,
        isTitle: true,
      },
      { key: 'C3', render: () => <DiscoverChannels /> },

      {
        key: 'CLIPS',
        render: () => <Title>Clipes que achamos que vai gostar</Title>,
        isTitle: true,
      },
      { key: 'C4', render: () => <DiscoverChannels /> },
    ];

    const indices: number[] = [];

    items.forEach((item, index) => item.isTitle && indices.push(index));

    return {
      data: items,
      indices,
    }
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header />

        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={item => item.key}
            stickyHeaderIndices={indices}
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Discover;
