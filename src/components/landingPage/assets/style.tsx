import styled from "styled-components";
import { isMobile } from "react-device-detect";

export const HeadLayout = styled.div`
position: relative;
display: flex;
justify-content: center;
`;

export const BackgroundImage = styled.img`
max-width: 100%;
min-height: 480px;
margin-top: ${isMobile && '80px'};
`;

export const HeaderTitle = styled.div`
position: absolute;
top: ${isMobile ? '260px' : '176px'};
font-family: 'IBM Plex Mono';
font-style: normal;
font-weight: 700;
font-size: ${isMobile ? '64px' : '140px'};
line-height: ${isMobile ? '60px' : '132px'};

display: flex;
align-items: center;
text-align: center;
flex-direction: column;

background: linear-gradient(180deg, rgba(255, 255, 255, 0.5) 6.44%, #FFFFFF 95.08%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
white-space: pre;
`;

export const LandingPageLayout = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
footer {
    margin-top: auto;
}
`;