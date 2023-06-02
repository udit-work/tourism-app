import { Title, TravelGuideLayout } from './assets/style';
import { TravelGuideCard } from '../common/travelGuideCard';
import { TravelGuideCardLayout } from './assets/style';

export const TravelGuide = () => {
    return (
        <TravelGuideLayout>
            <Title>
                Travel Guide
            </Title>
            <TravelGuideCardLayout>
                <TravelGuideCard />
            </TravelGuideCardLayout>
        </TravelGuideLayout>
    );
};