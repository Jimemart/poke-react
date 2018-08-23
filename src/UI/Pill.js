import styled from "styled-components";

export const Pill = styled.div`
  color: white;
  border: 1px solid black;
  border-radius: 8px;
  font-variant: small-caps;
  background: ${props => props.background || "green"};
  width: 150px;
  text-align: center;
  font-weight: bold;
  padding: 5px 10px;
  margin-bottom: 10px;
`;
