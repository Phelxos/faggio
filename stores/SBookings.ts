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
                  // create tempor<ry variable "dateToBeRemovedPotentially" to guaratee correct updating of bookings in store
                  let dateToBeRemovedPotentially = bookingToBeRemovedPotentially.date;
                  if (typeof dateToBeRemovedPotentially === "string") {
                    dateToBeRemovedPotentially = new Date(dateToBeRemovedPotentially);
                  }
                  return (
                    booking.date ===
                    // Um aus Übersicht zu löschen: ohne .toJSON()
                    (dateToBeRemovedPotentially as Date).toJSON() &&
                  booking.office === bookingToBeRemovedPotentially.office
                  )
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

// {console.log(typeof bookingToBeRemovedPotentially); // --> immer object
//   console.log(bookingToBeRemovedPotentially); // unterschiedlich, je nachdem ob aus Kalender oder MyBooking Übersicht
// }

// Für löschen aus Calender (ist Date, deswegen toJSON umandeln):
// booking.date ===
//   (bookingToBeRemovedPotentially.date as Date).toJSON() &&

// Für löschen aus MyBooking Übersicht (ist JSON, deswegen ohne toJSON)
// booking.date ===
//   bookingToBeRemovedPotentially.date &&
// booking.office === bookingToBeRemovedPotentially.office
