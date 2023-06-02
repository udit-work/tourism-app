import { isMobile } from "react-device-detect";
import styled from "styled-components";


export const MenuItems = styled.div`
display: flex;
flex: 1;
align-items: ${!isMobile && 'center'};
flex-direction: ${isMobile && 'column'};
margin-left: ${isMobile && '40px'};
`;

export const MenuLayout = styled.div`
display: flex;
gap: 40px;
margin-left: ${!isMobile && '80px'};
flex-direction: ${isMobile && 'column'};
flex: 1;
margin-bottom: ${isMobile && '40px'};
`

export const MenuItem = styled.div`
cursor: pointer;
a {
    text-decoration: none;
    color: black;
}
`;

export const StyledButton = styled.button`
border-radius: 8px;
background-color: #008080;
padding: 9px 24px 11px;
width: 128px;
color: white;
border: 1px solid #008080;
cursor: pointer;
`;