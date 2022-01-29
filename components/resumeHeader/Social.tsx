import React, { Dispatch, SetStateAction } from "react";
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGlobe,
} from "react-icons/fa";

interface Props {
  setSocialValue: Dispatch<SetStateAction<string>>;
}

const Social: React.FC<Props> = (props) => {
  const { setSocialValue } = props;

  const returnSocialValue = (value: string) => {
    setSocialValue(value);
  };
  return (
    <div>
      <div className="flex justify-center">
        <FaGithub
          className="w-12 h-12 p-2  rounded cursor-pointer mr-5 hover:bg-violet-100 text-github"
          onClick={() => returnSocialValue("github")}
        />
        <FaGlobe
          className="w-12 h-12 p-2  rounded cursor-pointer mr-5 hover:bg-red-100 text-red-500"
          onClick={() => returnSocialValue("website")}
        />
        <FaLinkedinIn
          className="w-12 h-12 p-2  rounded cursor-pointer mr-5 hover:bg-blue-100 text-linkedin"
          onClick={() => returnSocialValue("linkedin")}
        />
        <FaInstagram
          className="w-12 h-12 p-2  rounded cursor-pointer mr-5 hover:bg-violet-100 text-instagram"
          onClick={() => returnSocialValue("instagram")}
        />
        <FaTwitter
          className="w-12 h-12 p-2  rounded cursor-pointer mr-5 hover:bg-blue-100 text-blue-500"
          onClick={() => returnSocialValue("twitter")}
        />
      </div>
    </div>
  );
};

export default Social;
