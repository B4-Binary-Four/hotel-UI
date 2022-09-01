import Booking from "./Booking";

export interface BookingProps {
    data: Booking[];
    getValue?: (e: any) => void
}