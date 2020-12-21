import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const List = styled.View`
  padding: 8px 0 80px;
`;

export const StreamContainer = styled.TouchableOpacity`
  flex-direction: column;
  flex: 1;
  margin-top: 12px;
  margin-bottom: 25px;
`;

export const StreamThumbnail = styled.Image`
  width: 100%;
`;

export const StreamRow = styled.View`
  flex-direction: row;
  margin-top: 12px;
  flex: 1;
`;

export const StreamHeader = styled.View`
  margin-left: 8px;
`;

export const StreamAvatar = styled.View`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background: ${colors.tag};
`;

export const StreamUserName = styled.Text`
  color: ${colors.black};
  font-family: roboto_700;
`;

export const StreamDescription = styled.Text`
  color: ${colors.black};
`;

export const StreamCategory = styled.Text`
  color: ${colors.gray};
  font-family: roboto_500;
`;

export const TagRow = styled.View`
  margin-top: 8px;
  flex-direction: row;
`;

export const TagView = styled.View`
  background: ${colors.tag};
  padding: 2px 8px;
  border-radius: 10px;
  margin-right: 5px;
`;

export const TagText = styled.Text`
  color: ${colors.black};
  font-family: roboto_500;
  font-size: 13px;
`;