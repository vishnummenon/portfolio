import { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

const SkillSet: FC = () => {
  return (
    <section className="mt-12">
      <h2>Skillset!</h2>
      <div className="flex items-center mt-4">
        <h6>Proficient</h6> <FontAwesomeIcon icon={faStar} className="ml-4" />
      </div>
      <pre className="mt-1">React Native, JS, Next</pre>
      <div className="flex mt-6 items-center">
        <h6>Getting Better </h6>
        <FontAwesomeIcon icon={faStarHalfStroke} className="ml-4" />
      </div>
      <pre className="mt-1">ML/AI, Python, Express</pre>
    </section>
  );
};

export default SkillSet;
