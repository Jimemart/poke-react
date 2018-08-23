import styled from "styled-components";

export const Card = styled.div`
  width: ${props => props.width || "100%"};
  background: #ea5252;
  height: ${props => props.height || "auto"};
  -webkit-box-shadow: 3px 4px 5px 0px rgba(133, 133, 133, 1);
  -moz-box-shadow: 3px 4px 5px 0px rgba(133, 133, 133, 1);
  box-shadow: 3px 4px 5px 0px rgba(133, 133, 133, 1);
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 30px;
  box-sizing: border-box;
`;
