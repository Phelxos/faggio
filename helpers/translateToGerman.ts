import axios from "axios";
export default async function translateToGerman(text: string) {
  const API_KEY = "bbdaeb54-d385-e09f-ef5e-09e595922881:fx";
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
