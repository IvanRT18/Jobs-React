const BtnContainer = ({ jobs, currentJob, setCurrentJob }) => {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <button
            key={item.id}
            className={index === currentJob ? "job-btn active-btn" : "job-btn"}
            onClick={() => setCurrentJob(index)}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
