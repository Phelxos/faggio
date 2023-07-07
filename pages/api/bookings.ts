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
        const { bookingsToBeRemoved } = req.body;
        const test = req.json;
        if (!Array.isArray(bookingsToBeRemoved))
          throw new Error(
            "🚨 The provided argument of bookings to be removed is not an array."
          );
        if (Array.isArray(bookingsToBeRemoved) && !bookingsToBeRemoved.length)
          throw new Error("🚨 No bookings to be removed have been provided.");
        const updatedBookingsForRemoving = await remove(bookingsToBeRemoved);
        res.status(200).json(updatedBookingsForRemoving);
        break;
      default:
        res.status(200).json("bookings");
    }
  } catch (error: Error | any) {
    res.status(500).json({ error: error.message });
    console.error(
      `🚨 An error has occurred while processing a request directed to ${apiPath.BOOKINGS}`,
      error
    );
  }
}
