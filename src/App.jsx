import { useEffect, useState } from "react";
import Loading from "./Loading";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState(null);
  const [currentJob, setCurrentJob] = useState(0);

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        currentJob={currentJob}
        setCurrentJob={setCurrentJob}
      />

      <JobInfo jobs={jobs} currentJob={currentJob} />
    </section>
  );
};
export default App;
