import { apiPath } from "../../config";
import {
  fetch, // GET
  enter, // POST
  remove, // DELETE
} from "../../database/apiHandlers/handleBookingsApi";

export default async function handler(req: any, res: any) {
  try {
    switch (req.method) {
      case "GET":
        const allBookings = await fetch();
        res.status(200).json(allBookings);
        break;
      case "POST":
        const { bookingsToBeSaved: bookingsToBeEntered } = req.body;
        const updatedBookingsForEntering = await enter(bookingsToBeEntered);
        res.status(200).json(updatedBookingsForEntering);
        break;
      case "DELETE":
        const bookingsToBeRemoved = req.body;
        const updatedBookingsForRemoving = await remove(bookingsToBeRemoved);
        res.status(200).json(updatedBookingsForRemoving);
        break;
      default:
        res.status(200).json("bookings");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: `An error occurred while processing a request directed to ${apiPath.BOOKINGS}`,
    });
  }
}
