import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import IBooking from "../typings/interfaces/IBooking";

interface Interface {
  bookings: IBooking[];
}

const useBookings = create<Interface>()(
  devtools(
    persist((set) => ({
      bookings: [],
    }))
  )
);

export default useBookings;
