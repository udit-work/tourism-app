import { useEffect, useState } from "react";
import { fetchActivities } from "../../service";


export interface IHighlightActivity {
    name: string
}
export interface IHighlightDetails {
    name: string,
    description: string,
    image: string,
    activities: IHighlightActivity[],
}
export const useFetchHighlightDetails = (activity: string) => {
    const [highlightDetails, setHighlightDetails] = useState<IHighlightDetails>();
    const triggerFetchHighlightDetailsAPICall = async () => {
        const resp = await fetchActivities(activity);
        if (resp) {
            setHighlightDetails(resp);
        }
    };
    useEffect(() => {
        if (activity) {
            triggerFetchHighlightDetailsAPICall();
        }
    }, [activity]);

    return [highlightDetails];
};