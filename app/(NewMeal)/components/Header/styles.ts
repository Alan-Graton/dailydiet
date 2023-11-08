import styled from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};

  align-items: center;
  justify-content: center;
  height: 80px;
`;

export const BackButton = styled.TouchableOpacity`

  position: relative;
  align-self: flex-start;


  margin-left: 12px;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_600,
}))``;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XMD}px;
`;
