import { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SocialConnection: FC = () => {
    return (
      <div className="fixed pb-20 mt-10 md:mt-0 md:bottom-20 pl-10 flex flex-col justify-center">
      <h4 className="font-mono">Connect with me ❤</h4>
      <div className="flex mt-4 justify-center">
        <a href="https://www.linkedin.com/in/vishnu-m-menon-54189524/" target="_blank" className="mx-2">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a href="mailto:vishnu.mmenon@gmail.com" target="_blank" className="mx-2">
          <FontAwesomeIcon icon={faEnvelope}  size="lg" />
        </a>
        <a href="https://www.instagram.com/vishnumohanshyla/" target="_blank" className="mx-2">
          <FontAwesomeIcon icon={faInstagram}  size="lg" />
        </a>
      </div>
    </div>
    );
};

export default SocialConnection;
