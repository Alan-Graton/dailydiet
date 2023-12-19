import styled from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

export const Button = styled.TouchableOpacity``;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_600,
}))``;
