import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import IBooking from "../typings/interfaces/IBooking";

interface Interface {
  // im store ist date als JSON String
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
        bookingsToBeSaved = bookingsToBeSaved.map((b: IBooking) => ({
          ...b,
          date: (b.date as Date).toJSON(),
        }));
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
              {if (bookingToBeRemovedPotentially.date === typeof String) 
                {
                  bookingToBeRemovedPotentially.date = new Date(bookingToBeRemovedPotentially.date)
                  console.log(bookingToBeRemovedPotentially);
                }
                return (
                booking.date === (bookingToBeRemovedPotentially.date as Date).toJSON() &&
                booking.office === bookingToBeRemovedPotentially.office
              )}
                
                
                // booking.date ===
                //   bookingToBeRemovedPotentially.date &&

                
            );
          }),
        }));
      },
    }))
  )
);

export default useBookings;
