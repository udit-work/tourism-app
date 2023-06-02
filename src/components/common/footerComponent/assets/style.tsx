import styled from "styled-components";
import { isMobile } from "react-device-detect";

export const FooterLayout = styled.div`
background: #001A1A;
padding: ${isMobile ? '22px 16px' : '22px 188px'};
`;

export const Image = styled.img`
filter: invert(1);
`;