import { apiPath } from "../../config";
import { fetch } from "../../database/apiHandlers/handleCoworkersApi";

export default async function handler(req: any, res: any) {
  try {
    const coworkers = await fetch();
    res.status(200).json(coworkers);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: `An error occurred while processing a request directed to ${apiPath.COWORKERS}`,
    });
  }
}
