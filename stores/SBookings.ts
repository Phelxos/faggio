import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import IBooking from "../typings/interfaces/IBooking";
import a from "axios";
import { apiPath } from "../config/index";
import useAccount from "./SAccount";

interface Interface {
  bookingsOther: IBooking[];
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
        bookingsOther: [],
        bookings: [],
        setBookings: async (bookingsToBeSaved: IBooking[]) => {
          if (!bookingsToBeSaved) return;
          bookingsToBeSaved = bookingsToBeSaved.map((b: IBooking) => ({
            ...b,
            date: (b.date as Date).toJSON(),
          }));
          const { data: bookingsFromApi } = await a.post(apiPath.BOOKINGS, {
            bookingsToBeSaved,
            coworkerId,
          });
          const sortedBookings = bookingsFromApi.sort(
            (a: IBooking, b: IBooking) => (a.date > b.date ? 1 : -1)
          );
          set(() => ({
            bookings: sortedBookings,
          }));
        },
        clearBookings: async () => {
          set(() => ({
            bookings: [],
          }));
        },
        deleteBookings: async (bookingsToBeRemoved: IBooking[]) => {
          if (!bookingsToBeRemoved) return;
          const { data: bookingsFromApi } = await a.delete(apiPath.BOOKINGS, {
            data: bookingsToBeRemoved,
          });
          const sortedBookings = bookingsFromApi.sort(
            (a: IBooking, b: IBooking) => (a.date > b.date ? 1 : -1)
          );
          set(() => ({
            bookings: sortedBookings,
          }));
        },
        fetchBookings: async () => {
          if (get().bookings) return;
          const { data: bookingsFromApi } = await a.get(apiPath.BOOKINGS);
          if (bookingsFromApi) {
            const sortedBookings = bookingsFromApi.sort(
              (a: IBooking, b: IBooking) => (a.date > b.date ? 1 : -1)
            );
            set(() => ({
              bookings: sortedBookings,
            }));
          } else {
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
