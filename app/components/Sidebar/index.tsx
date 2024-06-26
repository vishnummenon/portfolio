import { FC } from "react";
import ScrollLock from "react-scrolllock";

import SkillSet from "./SkillSet";
import SocialConnection from "./SocialConnection";
import ProfilePicture from "./ProfilePicture";
import Resume from "./Resume";

type SidebarProps = {
  isOPen: boolean;
  handleClose: () => void;
};

const Sidebar: FC<SidebarProps> = ({ isOPen, handleClose }: SidebarProps) => {
  if (!isOPen) return null;

  return (
    <ScrollLock>
      <div
        className={`fixed top-16 left-0 md:min-h-dvh w-full md:w-1/6 bg-cyan-900 z-50 transition duration-300 ease-in-out transform translate-x-0 md:translate-x-0 overflow-y-auto md:overflow-y-hidden ${
          isOPen ? "" : "-translate-x-full"
        }`}
      >
        <div className="top-0 right-0 p-2">
          <button
            className="text-white hover:text-gray-200 focus:outline-none mt-2"
            onClick={handleClose}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ProfilePicture />
          <SkillSet />
          <Resume />
        </div>
        <SocialConnection />
      </div>
    </ScrollLock>
  );
};

export default Sidebar;
