import { MenuIconLayout, TopBarLayout, LogoLayout } from './assets/style';
import alohaImg from '../../assets/Aloha.png';
import { ITopBarProps } from './@types';
import { isMobile } from 'react-device-detect';
import menuIcon from './assets/menu.png';
import { MenuItemsComponent } from '../common/menuItems';


export const TopBarComponent = ({
    config,
    handleMenuIconClick,
}: ITopBarProps) => {
    return (
        <TopBarLayout>
            <LogoLayout>
                <img src={alohaImg} />
            </LogoLayout>
            {
                isMobile ?
                    <MenuIconLayout onClick={handleMenuIconClick}>
                        <img src={menuIcon} />
                    </MenuIconLayout>
                    :
                    <MenuItemsComponent config={config} />
            }
        </TopBarLayout>
    );
};