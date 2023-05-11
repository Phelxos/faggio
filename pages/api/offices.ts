import { apiPath } from "../../config";
import { fetch } from "../../database/apiHandlers/handleOfficesApi";

export default async function handler(req: any, res: any) {
  try {
    const offices = await fetch();
    res.status(200).json(offices);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: `An error occurred while processing a request directed to ${apiPath.OFFICES}`,
    });
  }
}
