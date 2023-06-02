import { Link } from "react-router-dom"
import { IMenuItemConfig, IMenuItemsComponent } from "./@types"
import { MenuItem, MenuItems, MenuLayout, StyledButton } from "./assets/style"

export const MenuItemsComponent = ({
    config,
    handleClose,
}: IMenuItemsComponent) => {
    return (
        <MenuItems>
            <MenuLayout>
                {
                    config.map(({ title, redirectionLink }: IMenuItemConfig) => (
                        <MenuItem key={title}>
                            <Link to={redirectionLink} onClick={handleClose}>{title}</Link>
                        </MenuItem>
                    ))
                }
            </MenuLayout>
            <StyledButton>
                Book a trip
            </StyledButton>
        </MenuItems>
    )
}