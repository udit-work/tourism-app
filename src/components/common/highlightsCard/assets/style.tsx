import styled from "styled-components";

export const CardLayout = styled.div`
min-width: 334px;
max-width: 368px;
box-shadow: 0px 0px 16px rgba(0, 128, 128, 0.16);
border-radius: 8px;
height: 340px;
display: flex;
flex-direction: column;
:not(:first-child) {
    margin-left: 16px;
}
`;

export const Image = styled.img`
max-width: 100%;
border-top-right-radius: 8px;
border-top-left-radius: 8px;
`;

export const ContentLayout = styled.div`
margin: 24px;
display: flex;
flex-direction: column;
flex: 1;
`;

export const Title = styled.div`
font-family: 'IBM Plex Mono';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 20px;
color: #008080;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
min-height: 24px;
`;

export const Description = styled.div`
margin-top: 16px;
font-family: 'IBM Plex Mono';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
`;

export const CtaLayout = styled.div`
margin-top: 6px;
display: flex;
justify-content: flex-end;
flex: 1;
align-items: flex-end;
`;

export const CTAButton = styled.button`
background: #E6F2F2;
border-color: #E6F2F2;
border: 0;
border-radius: 100%;
padding: 12px;
height: 40px;
width: 40px;
cursor: pointer;
`;