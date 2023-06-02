import { ICategory } from "../../../shared/hooks/useFetchCategories";
import { IHighlight } from "../../../shared/hooks/useFetchHighlights";

export interface IHomePageProps {
    highlights: IHighlight[],
    categories: ICategory[],
}