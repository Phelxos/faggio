import axios from "axios";
export default async function translateToGerman(text: string) {
  console.log(process.env);
  const API_KEY = process.env.DEEPL_API_KEY;
  const API_URL = `https://api-free.deepl.com/v2/translate?auth_key=${API_KEY}&text=${encodeURIComponent(
    text
  )}&target_lang=DE`;
  try {
    const response = await axios.get(API_URL);
    console.log(
      "🚀 ~ file: translateToGerman.ts:9 ~ translateToGerman ~ response:",
      response
    );
    return response.data.translations[0].text;
  } catch (error) {
    console.error(error);
  }
}
