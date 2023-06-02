import { HighlightsCardLayout, HighlightsLayout, Title } from './assets/style';
import { HighlightsCard } from '../common/highlightsCard';
import { IHighlightsComponentProps } from './@types';

export const Highlights = ({
    highlights,
}: IHighlightsComponentProps) => {
    if (!highlights.length) {
        return null;
    }
    return (
        <HighlightsLayout>
            <Title>
                Highlights
            </Title>
            <HighlightsCardLayout>
                {
                    highlights.map(info => (
                        <HighlightsCard key={info?.title} {...info} />
                    ))
                }
            </HighlightsCardLayout>
        </HighlightsLayout>
    );
};