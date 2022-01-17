import React, { useState, Dispatch, SetStateAction } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import { Auth } from "@supabase/ui";
import Image from "next/image";
import Resume from "../public/resume.svg";
import axios from "axios";

// Modal.setAppElement("#root");

interface Props {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalNotebook = ({ modalOpen, setModalOpen }: Props) => {
  const { user } = Auth.useUser();
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  function closeModal() {
    setModalOpen(false);
  }

  const acceptName = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const body = {
      title: name,
      userId: user?.id,
    };
    await axios
      .post("http://localhost:3000/api/createResume", body)
      .then((res) => {
        console.log(res);
        router.push("/resume");
        setModalOpen(false);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className={classNames(
        modalOpen === true ? "fixed" : "hidden",
        "z-10 inset-0 overflow-y-auto"
      )}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={classNames(
          modalOpen === true ? "ease-out duration-300" : "ease-in duration-200",
          "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        )}
      >
        {/* <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    --> */}
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        {/* <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    --> */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 sm:mx-0 sm:h-16 sm:w-16">
                {/* <!-- Heroicon name: outline/exclamation --> */}
                <Image src={Resume} width={50} height={50} alt="reumse" />
              </div>
              <div className="mt-5 text-center sm:mt-3 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Add name of your resume!
                </h3>
              </div>
            </div>
            <div className="mt-5 mx-5">
              <form onSubmit={(e) => acceptName(e)}>
                <input
                  type="text"
                  id="course"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-100"
                />
                <div className="bg-gray-50  py-5  sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Create
                  </button>
                  <button
                    onClick={() => closeModal()}
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalNotebook;
