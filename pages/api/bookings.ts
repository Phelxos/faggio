import { apiPath } from "../../config";
import IBooking from "../../typings/interfaces/IBooking";
import filterDuplicateBookings from "../../helpers/filterDuplicateBookings";
import { addBooking } from "../../database/db";

let bookings: IBooking[] = [
  {
    date: "2023-06-07T23:00:00.000Z",
    coworkerId: 1000,
    officeId: 10,
  },
  {
    date: "2023-06-13T23:00:00.000Z",
    coworkerId: 1001,
    officeId: 10,
  },
  {
    date: "2023-06-09T23:00:00.000Z",
    coworkerId: 1002,
    officeId: 11,
  },
  {
    date: "2023-06-14T23:00:00.000Z",
    coworkerId: 1003,
    officeId: 10,
  },
  {
    date: "2023-06-01T23:00:00.000Z",
    coworkerId: 1004,
    officeId: 10,
  },
  {
    date: "2023-06-18T23:00:00.000Z",
    coworkerId: 1005,
    officeId: 10,
  },
  {
    date: "2023-06-09T23:00:00.000Z",
    coworkerId: 1006,
    officeId: 12,
  },
  {
    date: "2023-06-25T23:00:00.000Z",
    coworkerId: 1007,
    officeId: 13,
  },
  {
    date: "2023-06-03T23:00:00.000Z",
    coworkerId: 1008,
    officeId: 10,
  },
  {
    date: "2023-06-13T23:00:00.000Z",
    coworkerId: 1009,
    officeId: 10,
  },
  {
    date: "2023-06-17T23:00:00.000Z",
    coworkerId: 1010,
    officeId: 10,
  },
  {
    date: "2023-06-13T23:00:00.000Z",
    coworkerId: 1011,
    officeId: 10,
  },
  {
    date: "2023-06-05T23:00:00.000Z",
    coworkerId: 1012,
    officeId: 12,
  },
  {
    date: "2023-06-22T23:00:00.000Z",
    coworkerId: 1000,
    officeId: 12,
  },
  {
    date: "2023-06-09T23:00:00.000Z",
    coworkerId: 1001,
    officeId: 10,
  },
  {
    date: "2023-06-21T23:00:00.000Z",
    coworkerId: 1002,
    officeId: 10,
  },
  {
    date: "2023-06-20T23:00:00.000Z",
    coworkerId: 1003,
    officeId: 10,
  },
  {
    date: "2023-06-20T23:00:00.000Z",
    coworkerId: 1004,
    officeId: 10,
  },
  {
    date: "2023-06-19T23:00:00.000Z",
    coworkerId: 1005,
    officeId: 10,
  },
];

export default function handler(req: any, res: any) {
  try {
    if (req.method === "GET") {
      res.status(200).json(bookings);
    } else if (req.method === "POST") {
      const { bookingsToBeSaved } = req.body;
      bookings = filterDuplicateBookings([...bookings, ...bookingsToBeSaved]);
      addBooking(bookingsToBeSaved[0]);
      res.status(200).json(bookings);
    } else if (req.method === "DELETE") {
      const bookingsToBeRemoved = req.body;
      bookings = bookings.filter((booking: IBooking) => {
        return !bookingsToBeRemoved.some((toBeRemoved: IBooking) => {
          return (
            toBeRemoved.date === booking.date &&
            toBeRemoved.coworkerId === booking.coworkerId &&
            toBeRemoved.officeId === booking.officeId
          );
        });
      });
      res.status(200).json(bookings);
    } else {
      res.status(200).json(bookings);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: `An error occurred while processing a request directed to ${apiPath.BOOKINGS}`,
    });
  }
}
