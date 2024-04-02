import { FC } from "react";
import { orgs } from "../constants/experience";
import CompanyCard from "./CompanyCard";

const Experience: FC = () => {
  return (
    <section id="experience" className="experience h-screen flex flex-col justify-center items-center px-4">
      <h2 className="font-mono">My Experience</h2>
      <div className="w-full md:w-1/3">
        {orgs.map((org) => <CompanyCard key={org.id} org={org} />)}
      </div>
    </section>
  );
};

export default Experience;
