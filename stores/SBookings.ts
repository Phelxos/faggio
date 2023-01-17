import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import IBooking from "../typings/interfaces/IBooking";

interface Interface {
  bookings: IBooking[];
  addToBookings: (bookingToBeSaved: IBooking[]) => void;
  removeFromBookings: (bookingToBeRemoved: IBooking) => void;
  emptyBookings: () => void;
}

const useBookings = create<Interface>()(
  devtools(
    persist((set) => ({
      bookings: [],
      addToBookings: (bookingToBeSaved: IBooking[]) => {
        set((state) => ({
          bookings: [...state.bookings, ...bookingToBeSaved],
        }));
      },
      emptyBookings: () => {
        set(() => ({
          bookings: [],
        }));
      },
      removeFromBookings: (bookingToBeRemoved: IBooking) => {
        set((state) => ({
          bookings: state.bookings.filter(
            (booking: IBooking) =>
              booking.date !== bookingToBeRemoved.date &&
              booking.office !== bookingToBeRemoved.office
          ),
        }));
      },
    }))
  )
);

export default useBookings;
