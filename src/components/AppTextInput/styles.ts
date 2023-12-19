import styled from "styled-components/native";

export const Input = styled.TextInput`
  width: 100%;
  height: 48px;

  padding: 10px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;

  color: ${({ theme }) => theme.COLORS.GRAY_700}
`;
