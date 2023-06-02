import styled from "styled-components";

export const CategoryCardLayout = styled.div`
background: #FFFFFF;
border-radius: 8px;
display: flex;
padding: 24px;
cursor: pointer;
:first-child {
    margin-top: 16px;
}
:not(:first-child) {
    margin-top: 8px;
}
a {
    text-decoration: none;
    color: black;
    display: inherit;
    width: 100%;
}
`;

export const Title = styled.div`
`;

export const ArrowButton = styled.div`
display: flex;
align-items: center;
flex: 1;
justify-content: flex-end;
`;