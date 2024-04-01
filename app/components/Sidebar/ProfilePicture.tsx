import { FC } from "react";
import Image from "next/image";

import profilePic from "../../../public/images/me.webp";

const ProfilePicture: FC = () => {
  return (
    <div className="mt-8 flex justify-center">
      <Image
        src={profilePic}
        alt="Your Name - Profile Picture"
        className="rounded-full h-150px w-150px"
        placeholder="blur"
        height={180}
        width={180}
        style={{ borderRadius: '50%', overflow: 'hidden', width: '180px', height: '180px', objectFit: 'cover', borderColor: 'white', borderStyle: 'solid', borderWidth: 2 }}
      />
    </div>
  );
};

export default ProfilePicture;
