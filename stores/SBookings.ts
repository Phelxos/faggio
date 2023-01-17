import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Interface {
  bookings: Date[];
}

const useBookings = create<Interface>()(
  devtools(
    persist((set) => ({
      bookings: [],
    }))
  )
);

export default useBookings;
