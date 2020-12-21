import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

import {
  List,
  StreamContainer,
  StreamThumbnail,
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

const DiscoverChannels: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamRow>
        <StreamAvatar />

        <StreamHeader>
          <StreamUserName numberOfLines={1}>dev_marc</StreamUserName>

           <StreamDescription numberOfLines={1}>
            Clonando interface do app Twitch
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Ciência & Tecnologia
          </StreamCategory>

          <TagRow>
            <TagView>
              <TagText>Português</TagText>
            </TagView>

            <TagView>
              <TagText>Desenvolvimento Web</TagText>
            </TagView>
          </TagRow>
        </StreamHeader>
      </StreamRow>
    </StreamContainer>
  );

  return (
    <List>
      <StreamItem />
    </List>
  );
};

export default DiscoverChannels;
