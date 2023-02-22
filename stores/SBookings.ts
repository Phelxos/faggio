import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import IBooking from "../typings/interfaces/IBooking";

// Note: Zustand saves dates as JSON in the store – though, not immediately. After the page's next reload, the dates are saved as JSON for certain.

interface Interface {
  bookings: IBooking[];
  setBookings: (bookingsToBeSaved: IBooking[]) => void;
  deleteBookings: (bookingsToBeRemoved: IBooking[]) => void;
  clearBookings: () => void;
}

const useBookings = create<Interface>()(
  devtools(
    persist(
      (set) => ({
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
                (bookingToBeRemovedPotentially: IBooking) => {
                  // ensure data is writte as JSON
                  // create temporary variable "dateToBeRemovedPotentially" to guaratee correct updating of bookings in store
                  let dateToBeRemovedPotentially =
                    bookingToBeRemovedPotentially.date;
                  if (typeof dateToBeRemovedPotentially === "string") {
                    dateToBeRemovedPotentially = new Date(
                      dateToBeRemovedPotentially
                    );
                  }
                  return (
                    booking.date ===
                      (dateToBeRemovedPotentially as Date).toJSON() &&
                    booking.office === bookingToBeRemovedPotentially.office
                  );
                }
              );
            }),
          }));
        },
      }),
      {
        name: "bookings",
      }
    )
  )
);

export default useBookings;
