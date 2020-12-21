import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

import {
  List,
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUserName,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
} from './styles';

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUserName numberOfLines={1}>dev_marc</StreamUserName>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Clonando interface do app Twitch
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Ciência & Tecnologia
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Português</TagText>
          </TagView>

          <TagView>
            <TagText>Desenvolvimento Web</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  );

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
