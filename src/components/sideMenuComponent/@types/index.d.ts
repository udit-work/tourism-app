import { IMenuItemConfig } from "../../topBar/@types";

export interface ISideMenuComponentProps {
    handleCloseButtonClick: () => void,
    config: IMenuItemConfig[],
}