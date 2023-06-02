import styled from "styled-components";

export const TravelGuideCardLayout = styled.div`
display: flex;
padding: 24px;
background: white;
border-radius: 8px;
`;

export const ContentLayout = styled.div`
flex: 1;
`;

export const ImageLayout = styled.div`
display: flex;
align-items: center;
`;

export const Name = styled.div`
font-family: 'IBM Plex Mono';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 20px;
color: #001A1A;
`;

export const Experience = styled.div`
margin-top: 8px;    
font-family: 'IBM Plex Mono';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #001A1A; 
`;

export const ContactCtaLayout = styled.div`
margin-top: 40px;
`;

export const ContactButton = styled.button`
border: 1px solid #008080;
border-radius: 8px;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
color: #008080;
text-align: center;
padding: 10px 24px;
background: white;
cursor: pointer;
`;

export const Image = styled.img`
max-width: 100%;
border-radius: 100%;
`;