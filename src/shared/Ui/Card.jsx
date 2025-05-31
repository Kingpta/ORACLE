import styled from "styled-components";
import React from "react";

export const StyledCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledCardContent = styled.div`
  padding: 16px;
`;

export function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}

export function CardContent({ children }) {
  return <StyledCardContent>{children}</StyledCardContent>;
}
