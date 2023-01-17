import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import IBooking from "../typings/interfaces/IBooking";

interface Interface {
  bookings: IBooking[];
  setBookings: (bookingToBeSaved: IBooking[]) => void;
  deleteBookings: (bookingToBeRemoved: IBooking) => void;
  clearBookings: () => void;
}

const useBookings = create<Interface>()(
  devtools(
    persist((set) => ({
      bookings: [],
      setBookings: (bookingToBeSaved: IBooking[]) => {
        set((state) => ({
          bookings: [...state.bookings, ...bookingToBeSaved],
        }));
      },
      clearBookings: () => {
        set(() => ({
          bookings: [],
        }));
      },
      deleteBookings: (bookingToBeRemoved: IBooking) => {
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
