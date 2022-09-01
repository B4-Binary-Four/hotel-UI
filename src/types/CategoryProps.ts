import {ICategory} from "./ICategory";

export interface CategoryProps {
    data: ICategory[];
    getValue?: (e: any) => void
}