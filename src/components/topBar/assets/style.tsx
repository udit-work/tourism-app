import { isMobile } from "react-device-detect";
import styled from "styled-components";


export const TopBarLayout = styled.div`
position: absolute;
padding: 20px 24px;
background: white;
border-radius: ${!isMobile && '12px'};
display: flex;
align-items: center;
top: ${isMobile ? '0' : '24px'};
margin: ${isMobile ? '0 24px' : '0 188px'};
width: ${isMobile ? 'calc(100% - 48px)' : 'calc(100% - 376px)'};
justify-content: ${isMobile && 'space-between'};
`;

export const LogoLayout = styled.div`
`;

export const MenuIconLayout = styled.div`
display: flex;
cursor: pointer;
`;