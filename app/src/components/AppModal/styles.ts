import styled from "styled-components/native";

export const ModalContent = styled.View`
  width: 95%;
  height: 65%;

  padding: 16px;

  border-radius: 6px;

  justify-content: space-around;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Message = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XMD}px;
  font-weight: bold;

  text-align: center;
`;

export const Actions = styled.View`
  flex-direction: row;
  padding: 10px;
  gap: 10px;
`;
