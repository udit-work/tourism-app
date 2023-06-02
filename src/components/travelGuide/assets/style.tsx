import styled from "styled-components";
import { isMobile } from "react-device-detect";

export const TravelGuideLayout = styled.div`
margin-left: ${!isMobile && '32px'};
margin-top: 40px;
width: 100%;
`;

export const Title = styled.div`
font-family: 'IBM Plex Mono';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
`;

export const TravelGuideCardLayout = styled.div`
margin-top: 16px;
`;