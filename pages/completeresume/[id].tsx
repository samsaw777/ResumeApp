import React, { useState, useEffect } from "react";
import Navbar from "../../components/navigation/Navbar";
import Colors from "../../components/colorpallete/ColorList";
import { useRouter } from "next/router";
import axios from "axios";
import { urlFetcher } from "../../Utils/urlFetcher";
import FinalOutput from "../../components/Output/FinalOutput";
const CompleteResume = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [resumeData, setResumeData] = useState<any>({});
  const [id, setId] = useState<string | undefined | string[]>("");
  const [color, setColor] = useState<string>("#64ffda");
  console.log(color);
  useEffect(() => {
    if (router.isReady) {
      setId(router.query.id);
    }
  }, [router.isReady, router.query.id]);
  useEffect(() => {
    const body = {
      resumeId: id,
    };
    setLoading(true);
    axios
      .post(`${urlFetcher()}/api/fetchResumeInfo`, body)
      .then((res) => {
        console.log(res.data);
        setResumeData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);
  return (
    <div className="h-screen">
      <Navbar />
      <div className="grid grid-cols-2 gap-2  h-resumeHeight">
        <Colors setColor={setColor} />
        <FinalOutput resumeData={resumeData} color={color} />
      </div>
    </div>
  );
};

export default CompleteResume;
