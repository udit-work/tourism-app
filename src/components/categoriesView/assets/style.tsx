import { isMobile } from "react-device-detect";
import styled from "styled-components";

export const CategoriesViewLayout = styled.div`
margin: ${isMobile ? '40px 16px' : '40px 188px'};
`;