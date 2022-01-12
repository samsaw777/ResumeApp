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
          className="w-12 h-12 p-2 bg-gray-200 rounded cursor-pointer mr-5"
          onClick={() => returnSocialValue("github")}
        />
        <FaGlobe
          className="w-12 h-12 p-2 bg-gray-200 rounded cursor-pointer mr-5"
          onClick={() => returnSocialValue("website")}
        />
        <FaLinkedinIn
          className="w-12 h-12 p-2 bg-gray-200 rounded cursor-pointer mr-5"
          onClick={() => returnSocialValue("linkedin")}
        />
        <FaInstagram
          className="w-12 h-12 p-2 bg-gray-200 rounded cursor-pointer mr-5"
          onClick={() => returnSocialValue("instagram")}
        />
        <FaTwitter
          className="w-12 h-12 p-2 bg-gray-200 rounded cursor-pointer mr-5"
          onClick={() => returnSocialValue("twitter")}
        />
      </div>
    </div>
  );
};

export default Social;
