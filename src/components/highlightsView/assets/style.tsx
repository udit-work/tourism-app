import { isMobile } from "react-device-detect";
import styled from "styled-components";

export const HighlightsViewLayout = styled.div`
margin: ${isMobile ? '40px 16px' : '40px 188px'};
display: flex;
`;

export const ImageLayout = styled.div`
width: 40%;
img {
    max-width: 100%;
}
`;