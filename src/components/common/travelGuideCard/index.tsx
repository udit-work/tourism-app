import { Image, ContactButton, ContactCtaLayout, ContentLayout, Experience, ImageLayout, Name, TravelGuideCardLayout } from './assets/style';
import avtarIcon from './assets/avtar.png';

export const TravelGuideCard = () => {
    return (
        <TravelGuideCardLayout>
            <ContentLayout>
                <Name>
                    Hadwin Malone
                </Name>
                <Experience>
                    Guide since 2012
                </Experience>
                <ContactCtaLayout>
                    <ContactButton>
                        Contact
                    </ContactButton>
                </ContactCtaLayout>
            </ContentLayout>
            <ImageLayout>
                <Image src={avtarIcon} />
            </ImageLayout>
        </TravelGuideCardLayout>
    );
};