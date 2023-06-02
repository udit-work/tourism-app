import { isMobile } from "react-device-detect";
import styled from "styled-components";

export const ErrorViewLayout = styled.div`
margin: ${isMobile ? '0 16px': '40px 188px'};
`;