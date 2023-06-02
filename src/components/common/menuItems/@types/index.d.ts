export interface IMenuItemConfig {
    title: string,
    redirectionLink: string,
}

export interface IMenuItemsComponent {
    config: IMenuItemConfig[],
    handleClose?: () => void,
}