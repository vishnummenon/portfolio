import { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const SkillSet: FC = () => {
  return (
    <section className="mt-12 ml-12">
      <strong className="text-2xl">Skillset!</strong>
      <div className="flex items-center mt-4">
        <h6>Proficient</h6> <FontAwesomeIcon icon={faStar} className="ml-4" />
      </div>
      <pre className="mt-1">React Native, JS, Next</pre>
      <div className="flex mt-6 items-center">
        <h6>Getting Better </h6>
        <FontAwesomeIcon icon={faStarHalfStroke} className="ml-4" />
      </div>
      <pre className="mt-1">ML/AI, Python</pre>
      <div className="flex mt-6 items-center">
        <h6>Dabbled in </h6>
        <FontAwesomeIcon icon={regularStar} className="ml-4" />
      </div>
      <pre className="mt-1">Express, MongoDB</pre>
    </section>
  );
};

export default SkillSet;
