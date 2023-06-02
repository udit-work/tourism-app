import { isMobile } from "react-device-detect";
import styled from "styled-components";

export const DropdownLayout = styled.div`
margin-top: 16px;
select {
    width: ${isMobile && '100%'};
}
`;