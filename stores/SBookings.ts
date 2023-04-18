import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import IBooking from "../typings/interfaces/IBooking";
import a from "axios";
import { apiPath } from "../config/index";
import { EActions as action } from "../pages/api/bookings";

// Note: Zustand saves dates as JSON in the store – though, not immediately. After the page's next reload, the dates are saved as JSON for certain.

interface Interface {
  bookingsOther: IBooking[];
  bookings: IBooking[];
  setBookings: (bookingsToBeSaved: IBooking[]) => void;
  deleteBookings: (bookingsToBeRemoved: IBooking[]) => void;
  clearBookings: () => void;
}

const useBookings = create<Interface>()(
  devtools(
    persist(
      (set) => ({
        bookingsOther: [],
        bookings: [],
        setBookings: async (bookingsToBeSaved: IBooking[]) => {
          bookingsToBeSaved = bookingsToBeSaved.map((b: IBooking) => ({
            ...b,
            date: (b.date as Date).toJSON(),
          }));
          // TO-DO: Save bookings to API
          if (bookingsToBeSaved) {
            const { data: bookingsFromApi } = await a.post(apiPath.BOOKINGS, {
              bookingsToBeSaved,
            });
          }
          set((state) => ({
            bookings: [...state.bookings, ...bookingsToBeSaved].sort((a, b) =>
              a.date > b.date ? 1 : -1
            ),
          }));
        },
        clearBookings: async () => {
          set(() => ({
            bookings: [],
          }));
        },
        deleteBookings: async (bookingsToBeRemoved: IBooking[]) => {
          if (bookingsToBeRemoved) {
            const { data: bookingsFromApi } = await a.delete(apiPath.BOOKINGS, {
              data: bookingsToBeRemoved,
            });
          }
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
