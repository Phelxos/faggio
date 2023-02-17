// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCopy } from "@fortawesome/free-solid-svg-icons";
import Icon from "../../icons/Icon";

interface Props {
  street: string;
  housenumber: string;
  postcode: string;
}

export default function OfficesCardAddress({
  street,
  housenumber,
  postcode,
}: Props) {

// const copyStreetHousenumber = (street: string, housenumber: string) => {
//   console.log("This is Street and Housenumber");
//   let putStreetHousenumberTogether = street + '' + housenumber;
//   console.log(putStreetHousenumberTogether);
//   let streetHousenumber = navigator.clipboard.writeText(putStreetHousenumberTogether);
//   console.log(streetHousenumber);
// }

const copyAdress = (adressPart_1: string, adressPart_2?: string, adressPart_3?: string) => {
  let putAdressTogether = adressPart_1 + '' + adressPart_2 + '' + adressPart_3;
  console.log(`Zusammengefügt: ${putAdressTogether}`);
  let copiedAdress = navigator.clipboard.writeText(putAdressTogether);
  console.log(`Kopierter Text: ${copiedAdress}`);
}

  return (
    <div className="rounded-lg border-2 border-amber-800 bg-amber-600">
      <div className="flex items-center justify-between bg-amber-900/90 p-4">
        <span className="ml-1 text-lg font-extralight tracking-widest text-amber-400/75">
          Adresse
        </span>
        <button className="flex flex-col items-center justify-center">
          {/* <FontAwesomeIcon
            icon={faCopy}
            className="h-3 w-3 rounded-full bg-amber-700/50 p-2 text-amber-600 opacity-75"
          /> */}
          <Icon
            icon="documentDuplicate"
            className="h-8 w-8 rounded-full bg-amber-700/50 p-2 text-amber-600 opacity-75"
            onClick={() => copyAdress("Adresse")}
          />
        </button>
      </div>
      <div className="flex w-full flex-col gap-1 p-4">
        <div className="flex w-full items-center justify-between gap-4">
          <div className="w-full text-right">
            <span className="break-all text-xs font-semibold uppercase tracking-widest text-amber-900">
              {street} {housenumber}
            </span>
          </div>
          <button className="flex flex-col items-center justify-center">
            {/* <FontAwesomeIcon
              icon={faCopy}
              className="h-3 w-3 rounded-full bg-amber-800/25 p-2 text-amber-900/50"
            /> */}
            <Icon
              icon="documentDuplicate"
              className="h-8 w-8 rounded-full bg-amber-700/50 p-2 text-amber-900 opacity-75"
              onClick={() => copyAdress(street, housenumber)}
            />
          </button>
        </div>
        <hr className="my-2 border-amber-900 opacity-25" />
        <div className="flex w-full items-center justify-between gap-4">
          <div className="w-full text-right">
            <span className="break-all text-xl font-thin uppercase text-amber-900">
              {postcode}
            </span>
          </div>
          <button className="flex flex-col items-center justify-center">
            {/* <FontAwesomeIcon
              icon={faCopy}
              className="h-3 w-3 rounded-full bg-amber-800/25 p-2 text-amber-900/50"
            /> */}
            <Icon
              icon="documentDuplicate"
              className="h-8 w-8 rounded-full bg-amber-700/50 p-2 text-amber-900 opacity-75"
              onClick={() => copyAdress(postcode)}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
