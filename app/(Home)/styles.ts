import styled, { css } from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 16px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ActionForm = styled.View`
  width: 100%;
  align-items: flex-start;
  gap: 10px;
  padding: 5px;
  margin: 20px;
`;

export const ActionFormTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XMD}px;
`;

export const Logo = styled.Image`
  width: 80px;
  height: 35px;
`;

// FIXME: "border-color" not working with Styled Components
export const ProfilePic = styled.Image`
  width: 50px;
  height: 50px;

  border-radius: 50px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-width: 2px;
`;

export const SectionListTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XMD}px;
    color: ${theme.COLORS.GRAY_700};
  `}

  font-weight: bold;
  margin-top: 5%;
`;
