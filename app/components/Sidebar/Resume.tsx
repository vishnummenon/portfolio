import { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const Resume: FC = () => {
  return (
    <div className="flex mt-20 justify-center">
    <a
      href="https://drive.google.com/file/d/1uHXIphytw3Y0OI5_DX3oVxpWK2Xowuj9/view?usp=sharing"
      className="text-blue-400 hover:text-blue-600 bg-white p-4 rounded font-mono"
      target="_blank"
    >
      View My Resume
      <FontAwesomeIcon icon={faFile} className="ml-4" />
    </a>
    </div>
  );
};

export default Resume;
