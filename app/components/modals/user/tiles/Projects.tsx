import { FC } from "react";
import Image from "next/image";

const Projects: FC = () => {
  const temporaryCompanyLogos = [
    "/images/company-logo.jpg",
    "/images/company-logo.jpg",
    "/images/company-logo.jpg",
    "/images/company-logo.jpg",
    "/images/company-logo.jpg",
    "/images/company-logo.jpg",
    "/images/company-logo.jpg",
    "/images/company-logo.jpg",
    "/images/company-logo.jpg",
    "/images/company-logo.jpg",
    "/images/company-logo.jpg",
  ];

  return (
    <div className="col-span-4 w-full rounded bg-pink-700/50 p-4">
      <p className="mb-2 font-thin tracking-wider text-pink-300/75">Projekte</p>
      <div className="flex w-full snap-x items-center gap-4 overflow-x-scroll px-3 py-2">
        {temporaryCompanyLogos.map((url, i) => (
          <Image
            src={url}
            alt="company logo"
            className="w-3/4 snap-center rounded-full border-2 border-pink-200/50 shadow-md"
            width={35}
            height={35}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
