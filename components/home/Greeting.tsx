import React, { useEffect, useState } from "react";
import useGreeting from "../../stores/SGreeting";
import translateToGerman from "../../helpers/translateToGerman";
import Spinner from "../Spinner";

export default function Greeting() {
  const greeting = useGreeting((s) => s.greeting);
  const language = useGreeting((s) => s.language);
  const [translatedLanguage, setTranslatedLanguage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const awaitTranslation = async () => {
      try {
        const translation = await translateToGerman(language);
        setTranslatedLanguage(translation);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    awaitTranslation();
  }, [language]);

  if (isLoading) return <Spinner />;

  return (
    <div>
      <div>{greeting}!</div>
      <div>{translatedLanguage}</div>
    </div>
  );
}
