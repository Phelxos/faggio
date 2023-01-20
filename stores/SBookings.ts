import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import IBooking from "../typings/interfaces/IBooking";

interface Interface {
  bookings: IBooking[];
  setBookings: (bookingsToBeSaved: IBooking[]) => void;
  deleteBookings: (bookingsToBeRemoved: IBooking[]) => void;
  clearBookings: () => void;
}

const useBookings = create<Interface>()(
  devtools(
    persist((set) => ({
      bookings: [],
      setBookings: (bookingsToBeSaved: IBooking[]) => {
        set((state) => ({
          bookings: [...state.bookings, ...bookingsToBeSaved],
        }));
      },
      clearBookings: () => {
        set(() => ({
          bookings: [],
        }));
      },
      deleteBookings: (bookingsToBeRemoved: IBooking[]) => {
        set((state) => ({
          bookings: state.bookings.filter((booking: IBooking) => {
            return !bookingsToBeRemoved.some(
              (bookingToBeRemovedPotentially: IBooking) =>
                +booking.date === +bookingToBeRemovedPotentially.date &&
                booking.office === bookingToBeRemovedPotentially.office
            );
          }),
        }));
      },
    }))
  )
);

export default useBookings;
