import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import IBooking from "../typings/interfaces/IBooking";
import a from "axios";
import { apiPath } from "../config/index";
import useAccount from "./SAccount";
import prepareDateAsString from "../helpers/prepareDateAsString";

interface Interface {
  bookings: IBooking[];
  setBookings: (bookingsToBeSaved: IBooking[]) => Promise<void>;
  deleteBookings: (bookingsToBeRemoved: IBooking[]) => Promise<void>;
  clearBookings: () => Promise<void>;
  fetchBookings: () => Promise<void>;
}

const { coworkerId } = useAccount.getState();

const useBookings = create<Interface>()(
  devtools(
    persist(
      (set, get) => ({
        bookings: [],
        setBookings: async (bookingsToBeSaved: IBooking[]) => {
          if (!bookingsToBeSaved) return;
          try {
            bookingsToBeSaved = bookingsToBeSaved.map((b: IBooking) => {
              return {
                ...b,
                date: prepareDateAsString(b.date),
              };
            });
            const { data: bookingsFromApi } = await a.post(apiPath.BOOKINGS, {
              bookingsToBeSaved,
              coworkerId,
            });
            if (!bookingsFromApi)
              throw new Error("🚧 | No bookings returned from API.");
            const sortedBookings = bookingsFromApi?.sort(
              (a: IBooking, b: IBooking) => (a.date > b.date ? 1 : -1)
            );
            set(() => ({
              bookings: sortedBookings,
            }));
          } catch (error) {
            console.error(error);
          }
        },
        clearBookings: async () => {
          set(() => ({
            bookings: [],
          }));
        },
        deleteBookings: async (bookingsToBeRemoved: IBooking[]) => {
          if (!bookingsToBeRemoved) return;
          try {
            const { data: bookingsFromApi } = await a.delete(apiPath.BOOKINGS, {
              data: bookingsToBeRemoved,
            });
            if (!bookingsFromApi)
              throw new Error("🚧 | No bookings returned from API.");
            const sortedBookings = bookingsFromApi.sort(
              (a: IBooking, b: IBooking) => (a.date > b.date ? 1 : -1)
            );
            set(() => ({
              bookings: sortedBookings,
            }));
          } catch (error) {
            console.error(error);
          }
        },
        fetchBookings: async () => {
          if (get().bookings.length > 0) return;
          try {
            const { data: bookingsFromApi } = await a.get(apiPath.BOOKINGS);
            const sortedBookings = bookingsFromApi.sort(
              (a: IBooking, b: IBooking) => (a.date > b.date ? 1 : -1)
            );
            console.log(sortedBookings);
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
      }),
      {
        name: "bookings",
      }
    )
  )
);

export default useBookings;
