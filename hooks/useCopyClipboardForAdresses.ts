"use client";

import capitaliseFirstLetter from "../helpers/capitaliseFirstLetter";
import useToast from "../stores/SToast";

const useCopyClipboardForAddresses = () => {
  const { showToast } = useToast();

  const copyToClipboard = (
    partOne: string,
    partTwo: string,
    partThree?: string,
    partFour?: string
  ) => {
    const hasTwoParts = !partThree && !partFour;
    const hasFourParts = partThree && partFour;
    const copiedText = `${capitaliseFirstLetter(
      partOne
    )} ${capitaliseFirstLetter(partTwo)}`;
    if (hasTwoParts) {
      navigator.clipboard.writeText(copiedText);
      showToast({
        title: "Erfolgreich kopiert",
        description: `Du hast „${copiedText}“ in die Zwischenablage kopiert.`,
      });
    } else if (hasFourParts) {
      const copiedText = `${capitaliseFirstLetter(
        partOne
      )} ${capitaliseFirstLetter(partTwo)}, ${capitaliseFirstLetter(
        partThree
      )} ${capitaliseFirstLetter(partFour)}`;
      navigator.clipboard.writeText(copiedText);
      showToast({
        title: "Erfolgreich kopiert",
        description: `Du hast „${copiedText}“ in die Zwischenablage kopiert.`,
      });
    }
  };

  return copyToClipboard;
};

export default useCopyClipboardForAddresses;
