import {IRoom} from "./IRoom";

export interface RoomProps {
    data: IRoom[];
    getValue?: (e: any) => void
}