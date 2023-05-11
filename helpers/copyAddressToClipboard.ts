import capitaliseFirstLetter from "./capitaliseFirstLetter";

export default function copyAddressToClipboard(
  partOne: string,
  partTwo: string,
  partThree?: string,
  partFour?: string
) {
  if (arguments.length === 2) {
    navigator.clipboard.writeText(
      `${capitaliseFirstLetter(partOne)} ${capitaliseFirstLetter(partTwo)}`
    );
  } else if (arguments.length === 4) {
    navigator.clipboard.writeText(
      `${capitaliseFirstLetter(partOne)} ${capitaliseFirstLetter(
        partTwo
      )}, ${capitaliseFirstLetter(partThree!)} ${capitaliseFirstLetter(
        partFour!
      )}`
    );
  }
}
