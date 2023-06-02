import { isMobile } from "react-device-detect";
import styled from "styled-components";


export const StyledSection = styled.section`
display: flex;
background: #E6F2F2;
`;

export const Container = styled.div`
margin: ${isMobile ? '0 16px' : '0 188px'};
display: flex;
width: 100%;
padding-bottom: 80px;
flex-direction: ${isMobile ? 'column' : 'row'}
`;