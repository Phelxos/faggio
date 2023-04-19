import { apiPath } from "../../config";
import IBooking from "../../typings/interfaces/IBooking";
import filterDuplicateBookings from "../../helpers/filterDuplicateBookings";

let bookings: IBooking[] = [
  {
    date: "2023-05-07T23:00:00.000Z",
    coworkerId: 1000,
    office: "dortmund",
  },
  {
    date: "2023-05-13T23:00:00.000Z",
    coworkerId: 1001,
    office: "dortmund",
  },
  {
    date: "2023-05-09T23:00:00.000Z",
    coworkerId: 1002,
    office: "bremen",
  },
  {
    date: "2023-05-14T23:00:00.000Z",
    coworkerId: 1003,
    office: "dortmund",
  },
  {
    date: "2023-05-01T23:00:00.000Z",
    coworkerId: 1004,
    office: "dortmund",
  },
  {
    date: "2023-05-18T23:00:00.000Z",
    coworkerId: 1005,
    office: "dortmund",
  },
  {
    date: "2023-05-09T23:00:00.000Z",
    coworkerId: 1006,
    office: "cologne",
  },
  {
    date: "2023-05-25T23:00:00.000Z",
    coworkerId: 1007,
    office: "munich",
  },
  {
    date: "2023-05-03T23:00:00.000Z",
    coworkerId: 1008,
    office: "dortmund",
  },
  {
    date: "2023-05-13T23:00:00.000Z",
    coworkerId: 1009,
    office: "dortmund",
  },
  {
    date: "2023-05-17T23:00:00.000Z",
    coworkerId: 1010,
    office: "dortmund",
  },
  {
    date: "2023-05-13T23:00:00.000Z",
    coworkerId: 1011,
    office: "dortmund",
  },
  {
    date: "2023-05-05T23:00:00.000Z",
    coworkerId: 1012,
    office: "cologne",
  },
  {
    date: "2023-05-22T23:00:00.000Z",
    coworkerId: 1000,
    office: "cologne",
  },
  {
    date: "2023-05-09T23:00:00.000Z",
    coworkerId: 1001,
    office: "dortmund",
  },
  {
    date: "2023-05-21T23:00:00.000Z",
    coworkerId: 1002,
    office: "dortmund",
  },
  {
    date: "2023-04-20T23:00:00.000Z",
    coworkerId: 1003,
    office: "dortmund",
  },
  {
    date: "2023-04-20T23:00:00.000Z",
    coworkerId: 1004,
    office: "dortmund",
  },
  {
    date: "2023-04-19T23:00:00.000Z",
    coworkerId: 1005,
    office: "dortmund",
  },
];

export default function handler(req: any, res: any) {
  try {
    if (req.method === "GET") {
      res.status(200).json(bookings);
    } else if (req.method === "POST") {
      const { bookingsToBeSaved } = req.body;
      bookings = filterDuplicateBookings([...bookings, ...bookingsToBeSaved]);
      res.status(200).json(bookings);
    } else if (req.method === "DELETE") {
      const bookingsToBeRemoved = req.body;
      bookings = bookings.filter((booking: IBooking) => {
        return !bookingsToBeRemoved.some((toBeRemoved: IBooking) => {
          return (
            toBeRemoved.date === booking.date &&
            toBeRemoved.coworkerId === booking.coworkerId &&
            toBeRemoved.office === booking.office
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
