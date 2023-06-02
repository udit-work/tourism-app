import React, { Suspense, useState } from "react";
import { TopBarComponent } from "../topBar";
import { HeadLayout, BackgroundImage, HeaderTitle, LandingPageLayout } from './assets/style';
import backgroundImage from '../../assets/Image.png'
import { FooterComponent } from '../common/footerComponent';
import { useFetchHighlights } from '../../shared/hooks/useFetchHighlights';
import {
    Route,
    Routes,
} from "react-router-dom";
import { HomePage } from "../homePage";
import { useFetchCategories } from "../../shared/hooks/useFetchCategories";
const SideMenuComponent = React.lazy(() => import('../sideMenuComponent'));
const CategoriesViewComponent = React.lazy(() => import('../categoriesView'));
const HighlightsViewComponent = React.lazy(() => import('../highlightsView'));
const ErrorComponent = React.lazy(() => import('../errorView'));

export const LandingPage = () => {
    const [isSideMenuVisible, setIsSideMenuVisible] = useState<boolean>(false);
    const [highlights] = useFetchHighlights();
    const [categories] = useFetchCategories();

    const getHeaderMenuConfig = () => {
        const homeMenuItemConfig = {
            title: 'Home',
            redirectionLink: '/',
        }
        const highlightTitles = highlights?.map(highlight => ({
            title: highlight?.title,
            redirectionLink: `/activities/${highlight?.title}`,
        }));
        return [homeMenuItemConfig, ...highlightTitles];
    }
    return (
        <LandingPageLayout>
            <header>
                <HeadLayout>
                    <BackgroundImage src={backgroundImage} />
                    <TopBarComponent config={getHeaderMenuConfig()} handleMenuIconClick={() => setIsSideMenuVisible(true)} />
                    <HeaderTitle>
                        <div>Welcome</div>
                        <div>to Hawaii</div>
                    </HeaderTitle>
                </HeadLayout>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage highlights={highlights} categories={categories} />} />
                    <Route path="/categories/:categoryType" element={<Suspense><CategoriesViewComponent categories={categories} /></Suspense>} />
                    <Route path="/activities/:activityType" element={<Suspense><HighlightsViewComponent /></Suspense>} />
                    <Route path='*' element={<Suspense><ErrorComponent /></Suspense>} />
                </Routes>
            </main>
            <footer>
                <FooterComponent />
            </footer>
            {
                isSideMenuVisible &&
                <Suspense>
                    <SideMenuComponent handleCloseButtonClick={() => setIsSideMenuVisible(false)} config={getHeaderMenuConfig()} />
                </Suspense>
            }
        </LandingPageLayout>
    )
};