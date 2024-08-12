import MadlibsForm from "./MadlibsForm";
import MadlibStory from "./MadlibStory";
import { useState } from "react";

const Madlibs = () => {
  // initial state for the form to reset after submission
  const INITIAL_STATE = {
    noun: "",
    noun2: "",
    adjective: "",
    color: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  // submitted state to hide form and display story as well as reset button
  const [isSubmitted, setIsSubmitted] = useState(false);
  const resetMadlib = () => {
    setIsSubmitted(false);
    setFormData(INITIAL_STATE)
  };

  return (
    <div>
      <h1>MADLIBS!</h1>
      {!isSubmitted && (
        <MadlibsForm
          submitted={setIsSubmitted}
          setFormData={setFormData}
          formData={formData}
        />
      )}
      {isSubmitted && <MadlibStory formData={formData} />}
      {!isSubmitted ? null : <button onClick={resetMadlib}>Reset</button>}
    </div>
  );
};

export default Madlibs;
