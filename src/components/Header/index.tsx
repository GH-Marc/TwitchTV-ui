import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import colors from '../../styles/colors';

import { 
  Container,
  Avatar,
  OnlineStatus,
  RightSide,
  Button,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <OnlineStatus />
      </Avatar>

      <RightSide>
        <Button>
          <MaterialCommunityIcons
            name="video-outline"
            size={30}
            color={colors.black}
          />
        </Button>

        <Button>
          <AntDesign
            name="inbox"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={23}
            color={colors.black}
          />
        </Button>

        <Button>
          <Feather
            name="search"
            size={24}
            color={colors.black}
          />
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;
