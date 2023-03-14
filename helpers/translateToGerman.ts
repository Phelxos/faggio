import axios from "axios";
export default async function translateToGerman(text: string) {
  const API_KEY = process.env.DEEPL_API_KEY;
  const API_URL = `https://api-free.deepl.com/v2/translate?auth_key=${API_KEY}&text=${encodeURIComponent(
    text
  )}&target_lang=DE`;
  try {
    const response = await axios.get(API_URL);
    return response.data.translations[0].text;
  } catch (error) {
    console.error(error);
  }
}
