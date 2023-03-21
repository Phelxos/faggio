import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import IBooking from "../typings/interfaces/IBooking";

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
        bookingsOther: [
          {
            date: "2023-03-04T23:00:00.000Z",
            coworkerId: 1000,
            office: "dortmund",
          },
          {
            date: "2023-03-13T23:00:00.000Z",
            coworkerId: 1001,
            office: "dortmund",
          },
          {
            date: "2023-03-09T23:00:00.000Z",
            coworkerId: 1002,
            office: "bremen",
          },
          {
            date: "2023-03-14T23:00:00.000Z",
            coworkerId: 1003,
            office: "dortmund",
          },
          {
            date: "2023-03-01T23:00:00.000Z",
            coworkerId: 1004,
            office: "dortmund",
          },
          {
            date: "2023-03-18T23:00:00.000Z",
            coworkerId: 1005,
            office: "dortmund",
          },
          {
            date: "2023-03-09T23:00:00.000Z",
            coworkerId: 1006,
            office: "cologne",
          },
          {
            date: "2023-03-25T23:00:00.000Z",
            coworkerId: 1007,
            office: "munich",
          },
          {
            date: "2023-03-03T23:00:00.000Z",
            coworkerId: 1008,
            office: "dortmund",
          },
          {
            date: "2023-03-13T23:00:00.000Z",
            coworkerId: 1009,
            office: "dortmund",
          },
          {
            date: "2023-03-17T23:00:00.000Z",
            coworkerId: 1010,
            office: "dortmund",
          },
          {
            date: "2023-03-13T23:00:00.000Z",
            coworkerId: 1011,
            office: "dortmund",
          },
          {
            date: "2023-03-05T23:00:00.000Z",
            coworkerId: 1012,
            office: "cologne",
          },
          {
            date: "2023-03-22T23:00:00.000Z",
            coworkerId: 1000,
            office: "cologne",
          },
          {
            date: "2023-03-09T23:00:00.000Z",
            coworkerId: 1001,
            office: "dortmund",
          },
          {
            date: "2023-03-21T23:00:00.000Z",
            coworkerId: 1002,
            office: "dortmund",
          },
        ],
        bookings: [],
        setBookings: (bookingsToBeSaved: IBooking[]) => {
          bookingsToBeSaved = bookingsToBeSaved.map((b: IBooking) => ({
            ...b,
            date: (b.date as Date).toJSON(),
          }));
          set((state) => ({
            bookings: [...state.bookings, ...bookingsToBeSaved].sort((a, b) =>
              a.date > b.date ? 1 : -1
            ),
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
