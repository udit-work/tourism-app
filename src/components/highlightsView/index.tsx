import { useParams } from "react-router-dom";
import { useFetchHighlightDetails } from "../../shared/hooks/useFetchHighlightDetails";
import { HighlightsViewLayout, ImageLayout } from "./assets/style";
import { Title, Description } from "../common/highlightsCard/assets/style";
import { isMobile } from "react-device-detect";
import { DropdownComponent } from "../common/dropdown";

const HighlightsViewComponent = () => {
    const { activityType } = useParams();
    const [highlightDetails] = useFetchHighlightDetails(activityType || '');
    if (!highlightDetails) {
        return null;
    }

    const getDropdownOptions = () => highlightDetails?.activities?.map(activity => activity['name']);
    return (
        <HighlightsViewLayout>
            <div>
                <Title>
                    {highlightDetails?.name}
                </Title>
                <Description>
                    {highlightDetails?.description}
                </Description>
                <DropdownComponent name={highlightDetails?.name} options={getDropdownOptions()} />
            </div>
            {
                !isMobile &&
                <ImageLayout>
                    <img src={highlightDetails?.image} />
                </ImageLayout>
            }
        </HighlightsViewLayout>
    );
};

export default HighlightsViewComponent;