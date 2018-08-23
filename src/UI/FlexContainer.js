import styled from "styled-components"

export const FlexContainer = styled.div`
    display: flex;
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "flex-start"};
    height: ${props => props.height || "auto"};
    border: ${props => props.border || "none"};
    border-radius: 3px;
    flex-wrap: wrap;
`
