import Icon from "../../icons/Icon";

interface Props {
  street: string;
  houseNumber: string;
  postcode: string;
  city: string;
}

export default function OfficesCardAddress({
  street,
  houseNumber,
  postcode,
  city,
}: Props) {
  const copyAdress = (
    adressPart_1: string,
    adressPart_2: string,
    adressPart_3?: string,
    adressPart_4?: string
  ) => {
    if (!adressPart_3 && !adressPart_4) {
      let putAdressPartsTogetherShort =
        adressPart_1[0].toUpperCase() +
        adressPart_1.substring(1) +
        " " +
        adressPart_2[0].toUpperCase() +
        adressPart_2.substring(1);
      let copiedAdressShort = navigator.clipboard.writeText(
        putAdressPartsTogetherShort
      );
    } else {
      let putAdressPartsTogetherLong =
        adressPart_1[0].toUpperCase() +
        adressPart_1.substring(1) +
        " " +
        adressPart_2 +
        " " +
        adressPart_3 +
        " " +
        adressPart_4?.[0].toUpperCase() +
        adressPart_4?.substring(1);
      let copiedAdressLong = navigator.clipboard.writeText(
        putAdressPartsTogetherLong
      );
    }
  };

  return (
    <div className="rounded-lg border-2 border-amber-800 bg-amber-600">
      <div className="flex items-center justify-between bg-amber-900/90 p-4">
        <span className="ml-1 text-lg font-extralight tracking-widest text-amber-400/75">
          Adresse
        </span>
        <button className="flex flex-col items-center justify-center rounded-full active:bg-amber-400">
          <Icon
            icon="documentDuplicate"
            className="h-8 w-8 rounded-full bg-amber-700/50 p-2 text-amber-600 opacity-75 active:bg-amber-700"
            onClick={() => copyAdress(street, houseNumber, postcode, city)}
          />
        </button>
      </div>
      <div className="flex w-full flex-col gap-1 p-4">
        <div className="flex w-full items-center justify-between gap-4">
          <div className="w-full text-right">
            <span className="break-all text-xs font-semibold uppercase tracking-widest text-amber-900">
              {street} {houseNumber}
            </span>
          </div>
          <button className="flex flex-col items-center justify-center rounded-full active:bg-amber-400">
            <Icon
              icon="documentDuplicate"
              className="h-8 w-8 rounded-full bg-amber-700/50 p-2 text-amber-900 opacity-75"
              onClick={() => copyAdress(street, houseNumber)}
            />
          </button>
        </div>
        <hr className="my-2 border-amber-900 opacity-25" />
        <div className="flex w-full items-center justify-between gap-4">
          <div className="w-full text-right">
            <span className="break-all text-xl font-thin uppercase text-amber-900">
              {postcode} {city}
            </span>
          </div>
          <button className="flex flex-col items-center justify-center rounded-full active:bg-amber-400">
            <Icon
              icon="documentDuplicate"
              className="h-8 w-8 rounded-full bg-amber-700/50 p-2 text-amber-900 opacity-75"
              onClick={() => copyAdress(postcode, city)}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
