import a from "axios";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { apiPath } from "../config/index";
import safeguardDate from "../helpers/safeguardDateAgainstTimezoneOffset";
import IBooking from "../typings/interfaces/IBooking";
import useAccount from "./SAccount";
import mockBookings from "../database/mock/bookings";
import compareDatesSafely from "../helpers/compareDatesSafely";

interface Interface {
  bookings: IBooking[] | [];
  setBookings: (bookingsToBeSaved: IBooking[]) => Promise<number | Error>;
  deleteBookings: (bookingsToBeRemoved: IBooking[]) => Promise<number | Error>;
  clearBookings: () => void;
  fetchBookings: () => Promise<void>;
}

const { coworkerId } = useAccount.getState();
const useSqlData = process.env.USE_SQL_DATA?.toLowerCase() === "true";

const useBookings = create<Interface>()(
  devtools(
    persist(
      (set, get) => {
        if (useSqlData) {
          return {
            bookings: [],
            setBookings: async (bookingsToBeSaved: IBooking[]) => {
              if (!bookingsToBeSaved)
                throw new Error(
                  "🚨 No bookings supposed to be saved were passed to the bookings store."
                );
              try {
                bookingsToBeSaved = bookingsToBeSaved.map((b: IBooking) => {
                  return {
                    ...b,
                    date: safeguardDate(b.date),
                  };
                });
                const { data: bookingsFromApi } = await a.post(
                  apiPath.BOOKINGS,
                  {
                    bookingsToBeSaved,
                    coworkerId,
                  }
                );
                if (!bookingsFromApi)
                  throw new Error(
                    "🚨 No bookings have been returned from the API."
                  );
                const sortedBookings = bookingsFromApi?.sort(
                  (a: IBooking, b: IBooking) => (a.date > b.date ? 1 : -1)
                );
                set(() => ({
                  bookings: sortedBookings,
                }));
                return bookingsToBeSaved.length;
              } catch (error) {
                console.error(error);
                throw error;
              }
            },
            clearBookings: () => {
              set(() => ({
                bookings: [],
              }));
            },
            deleteBookings: async (bookingsToBeRemoved: IBooking[]) => {
              if (!bookingsToBeRemoved?.length)
                throw new Error(
                  "🚨 No bookings supposed to be deleted were passed to the bookings store."
                );
              try {
                const { data: bookingsFromApi } = await a.delete(
                  apiPath.BOOKINGS,
                  {
                    data: { bookingsToBeRemoved },
                  }
                );
                if (!bookingsFromApi)
                  throw new Error(
                    "🚨 No bookings have been returned from the API."
                  );
                const sortedBookings = bookingsFromApi.sort(
                  (a: IBooking, b: IBooking) => (a.date > b.date ? 1 : -1)
                );
                set(() => ({
                  bookings: sortedBookings,
                }));
                return bookingsToBeRemoved.length;
              } catch (error) {
                console.error(error);
                throw error;
              }
            },
            fetchBookings: async () => {
              if (get().bookings.length > 0) return;
              try {
                const { data: bookingsFromApi } = await a.get(apiPath.BOOKINGS);
                const sortedBookings = bookingsFromApi.sort(
                  (a: IBooking, b: IBooking) => (a.date > b.date ? 1 : -1)
                );
                set(() => ({
                  bookings: sortedBookings,
                }));
              } catch (error) {
                console.error(error);
                set(() => ({
                  bookings: [],
                }));
              }
            },
          };
        } else {
          return {
            bookings: [],
            setBookings: (bookingsToBeSaved: IBooking[]) => {
              if (!bookingsToBeSaved)
                throw new Error(
                  "🚨 No bookings supposed to be saved were passed to the bookings store."
                );
              try {
                bookingsToBeSaved = bookingsToBeSaved.map((b: IBooking) => {
                  return {
                    ...b,
                    date: safeguardDate(b.date),
                  };
                });
                const newBookingsList = [
                  ...get().bookings,
                  ...bookingsToBeSaved,
                ];
                const sortedBookings = newBookingsList?.sort(
                  (a: IBooking, b: IBooking) => (a.date > b.date ? 1 : -1)
                );
                set(() => ({
                  bookings: sortedBookings,
                }));
                return bookingsToBeSaved.length;
              } catch (error) {
                console.error(error);
                throw error;
              }
            },
            clearBookings: () => {
              set(() => ({
                bookings: [],
              }));
            },
            deleteBookings: (bookingsToBeRemoved: IBooking[]) => {
              if (!bookingsToBeRemoved?.length)
                throw new Error(
                  "🚨 No bookings supposed to be deleted were passed to the bookings store."
                );
              try {
                const newBookingsList = get().bookings.filter((b: IBooking) => {
                  return !bookingsToBeRemoved.some(
                    (btr: IBooking) =>
                      compareDatesSafely(b.date, btr.date) &&
                      btr.officeId === b.officeId &&
                      btr.coworkerId === b.coworkerId
                  );
                });
                const sortedBookings = newBookingsList.sort(
                  (a: IBooking, b: IBooking) => (a.date > b.date ? 1 : -1)
                );
                set(() => ({
                  bookings: sortedBookings,
                }));
                return bookingsToBeRemoved.length;
              } catch (error) {
                console.error(error);
                throw error;
              }
            },
            fetchBookings: () => {
              if (get().bookings.length > 0) return;
              try {
                set(() => ({
                  bookings: mockBookings,
                }));
              } catch (error) {
                console.error(error);
                set(() => ({
                  bookings: [],
                }));
              }
            },
          };
        }
      },
      {
        name: "bookings",
      }
    )
  )
);

export default useBookings;
