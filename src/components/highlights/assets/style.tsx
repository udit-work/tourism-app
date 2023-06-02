import styled from "styled-components";
import { isMobile } from "react-device-detect";

export const HighlightsLayout = styled.div`
margin: ${isMobile ? '40px 16px 70px' : '40px 188px 70px'};
`;

export const Title = styled.div`
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
`;

export const HighlightsCardLayout = styled.div`
margin-top: 24px;
display: flex;
overflow-x: ${isMobile && 'auto'};
padding: 0 10px 10px;
`;