import { CategoriesCardLayout, CategoriesLayout, Title } from './assets/style';
import { ICategory, useFetchCategories } from '../../shared/hooks/useFetchCategories';
import { CategoryCard } from '../common/categoryCard';
import { IHomePageProps } from '../homePage/@types';

export const Categories = ({
    categories,
}: Pick<IHomePageProps, 'categories'>) => {

    if (!categories) {
        return null;
    }
    return (
        <CategoriesLayout>
            <Title>
                Categories
            </Title>
            <CategoriesCardLayout>
                {
                    categories.map(({
                        name
                    }: ICategory) => (
                        <CategoryCard key={name} title={name} />
                    ))
                }
            </CategoriesCardLayout>
        </CategoriesLayout>
    );
};