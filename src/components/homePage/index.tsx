import { Categories } from "../categories";
import { Highlights } from "../highlights";
import { TravelGuide } from "../travelGuide";
import { IHomePageProps } from "./@types";
import { Container, StyledSection } from "./assets/style";

export const HomePage = ({
    highlights,
    categories,
}: IHomePageProps) => {
    return (
        <>
            <Highlights highlights={highlights} />
            <StyledSection>
                <Container>
                    <Categories categories={categories} />
                    <TravelGuide />
                </Container>
            </StyledSection>
        </>
    );
};