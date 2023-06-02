import { useEffect, useState } from "react";
import { fetchActivities, fetchCategories, fetchHighlights } from "../../service";

interface IActivity {
    title: string
}
export interface ICategory {
    name: string,
    activities: IActivity[]
}
export const useFetchCategories = () => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const triggerFetchCategoriesAPICall = async () => {
        const resp = await fetchCategories();
        if (resp && Array.isArray(resp)) {
            setCategories(resp);
        }
    };
    useEffect(() => {
        triggerFetchCategoriesAPICall();
    }, []);

    return [categories];
};