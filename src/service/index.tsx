import { triggerFetch } from "./utils";

export const fetchCategories = async () => {
    return await triggerFetch('/categories');
};

export const fetchHighlights = async () => {
    return await triggerFetch('/highlights');
};

export const fetchActivities = async (activity: string) => {
    return await triggerFetch(`/activities/${activity}`);
};