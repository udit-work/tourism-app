import { useEffect, useState } from "react";
import { fetchHighlights } from "../../service";


export interface IHighlight {
    title: string,
    description: string,
    image: string,
}
export const useFetchHighlights = () => {
    const [highlights, setHighlights] = useState<IHighlight[]>([]);
    const triggerFetchHighlightsAPICall = async () => {
        const resp = await fetchHighlights();
        if (resp && Array.isArray(resp)) {
            setHighlights(resp);
        }
    };
    useEffect(() => {
        triggerFetchHighlightsAPICall();
    }, []);

    return [highlights];
};