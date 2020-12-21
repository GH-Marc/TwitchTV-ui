import React from 'react';

import {
  List,
  CategoryContainer,
  CategoryImage,
  CategoryName,
  CategoryStatus,
  Info,
  TagRow,
  TagView,
  TagText,
} from './styles';

import data from './data';

interface ItemProps {
  item: typeof data[0];
}

const DiscoverList: React.FC = () => {
  const DiscoverItem: React.FC<ItemProps> = ({ item }) => (
    <CategoryContainer>
      <CategoryImage source={item.source} />
      <CategoryName numberOfLines={1}>{ item.name }</CategoryName>
      <CategoryStatus>
        <Info numberOfLines={1}>{ item.views }</Info>
      </CategoryStatus>

      <TagRow>
        <TagView>
          <TagText>{ item.tag }</TagText>
        </TagView>
      </TagRow>
    </CategoryContainer>
  )

  return (
    <List>
      {data.map(item => (
        <DiscoverItem key={item.name} item={item} />
      ))}
    </List>
  );
};

export default DiscoverList;
