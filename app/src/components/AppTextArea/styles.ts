import styled from "styled-components/native";

export const Input = styled.TextInput`
  padding: 10px;
  width: 100%;
  height: 90px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;

  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;
