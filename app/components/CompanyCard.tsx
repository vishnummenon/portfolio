import Image from "next/image";
import { FC } from "react";

import { IOrgs } from "../constants/experience";

type CompanyCardProps = {
  org: IOrgs;
};

const CompanyCard: FC<CompanyCardProps> = ({ org }: CompanyCardProps) => {
  const { name, logo, duration, highlights, skills } = org;
  return (
    <div
      id="company-card-container"
      className="bg-white opacity-75 hover:opacity-100 rounded my-8 p-4 border-2 border-cyan-200 border-solid"
    >
      <div className="flex">
        <Image
          src={logo}
          className="self-start border-2 border-black border-solid"
          alt="company_logo"
          placeholder="blur"
          width={80}
          height={80}
          style={{
            borderRadius: "50%",
            overflow: "hidden",
            width: "80px",
            height: "80px",
            objectFit: "cover",
          }}
        />
        <div className="flex flex-col ml-4 mt-2">
          <h4 className="font-mono text-black">{name}</h4>
          <h6 className="font-mono text-black">{duration}</h6>
        </div>
      </div>
      <ol className="list-decimal px-8 mt-4">
        {highlights.map((highlight) => <li key={highlight} className="font-mono text-black">
            {highlight}
        </li>)}
      </ol>
      <h6 className="font-mono text-black mt-2">Tech Stack: </h6>
      <ul className="flex justify-evenly list-disc">
        {skills.map((skill) => <li key={skill} className="font-mono text-black">
            {skill}
        </li>)}
      </ul>
    </div>
  );
};

export default CompanyCard;
