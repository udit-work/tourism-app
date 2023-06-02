import { IDropdownComponent } from "./@types";
import { DropdownLayout } from "./assets/style";

export const DropdownComponent = ({
    name,
    options,
}: IDropdownComponent) => {
    if (!options.length) {
        return null;
    }
    return (
        <DropdownLayout>
            <select name={name} id={name}>
                {
                    options.map((option: string) => (
                        <option value={option}>{option}</option>
                    ))
                }
            </select>
        </DropdownLayout>
    )
};