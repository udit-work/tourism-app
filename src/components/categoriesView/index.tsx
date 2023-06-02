import { useParams } from "react-router-dom";
import { Title } from "../common/highlightsCard/assets/style";
import { IHomePageProps } from "../homePage/@types";
import { CategoriesViewLayout } from "./assets/style";
import { useEffect, useState } from "react";
import { ICategory } from "../../shared/hooks/useFetchCategories";
import { DropdownComponent } from "../common/dropdown";

const CategoriesViewComponent = ({
    categories,
}: Pick<IHomePageProps, 'categories'>) => {
    const { categoryType } = useParams();
    const [categoryDetails, setCategoryDetails] = useState<ICategory>();

    useEffect(() => {
        if (categoryType) {
            setCategoryDetails(categories?.find((category) => category.name == categoryType));
        }
    }, [categoryType, categories]);
    if (!categoryDetails) {
        return null;
    }

    const getDropdownOptions = () => categoryDetails?.activities?.map(activity => activity['title']);
    return (
        <CategoriesViewLayout>
            <div>
                <Title>
                    {categoryDetails?.name}
                </Title>
                <DropdownComponent name={categoryDetails?.name} options={getDropdownOptions()} />
            </div>
        </CategoriesViewLayout>
    );
}

export default CategoriesViewComponent;