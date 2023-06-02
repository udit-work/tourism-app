import { ISideMenuComponentProps } from "./@types";
import { CloseButton, CloseButtonLayout, Overlay, SideMenuLayout } from "./assets/style";
import closeIcon from './assets/close.png';
import { MenuItemsComponent } from "../common/menuItems";

const SideMenuComponent = ({
    config,
    handleCloseButtonClick,
}: ISideMenuComponentProps) => {
    return (
        <>
            <Overlay />
            <SideMenuLayout>
                <CloseButtonLayout>
                    <CloseButton onClick={handleCloseButtonClick}>
                        <img src={closeIcon} />
                    </CloseButton>
                </CloseButtonLayout>
                <MenuItemsComponent handleClose={handleCloseButtonClick} config={config} />
            </SideMenuLayout>
        </>
    )
};

export default SideMenuComponent;