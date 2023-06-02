import { CategoryCardLayout, ArrowButton, Title } from './assets/style';
import arrowRightIcon from '../../../assets/arrow_forward.png';
import { Link } from 'react-router-dom';

export const CategoryCard = ({
    title,
}: ICategoriesCardProps) => {
    return (
        <CategoryCardLayout>
            <Link to={`/categories/${title}`}>
                <>
                    <Title>
                        {title}
                    </Title>
                    <ArrowButton>
                        <img src={arrowRightIcon} />
                    </ArrowButton>
                </>
            </Link>
        </CategoryCardLayout>
    );
};
