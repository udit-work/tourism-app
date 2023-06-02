import { CTAButton, CardLayout, CtaLayout, Description, Image, Title, ContentLayout } from './assets/style';
import arrowRightIcon from '../../../assets/arrow_forward.png';
import { Link } from 'react-router-dom';

export const HighlightsCard = ({
    image,
    title,
    description,
}: IHighlightsCardProps) => {
    return (
        <CardLayout>
            <div>
                <Image src={image} alt={title} />
            </div>
            <ContentLayout>
                <Title>
                    {title}
                </Title>
                <Description>
                    {description}
                </Description>
                <CtaLayout>
                    <Link to={`/activities/${title}`}>
                        <CTAButton>
                            <img src={arrowRightIcon} />
                        </CTAButton>
                    </Link>
                </CtaLayout>
            </ContentLayout>
        </CardLayout>
    );
};