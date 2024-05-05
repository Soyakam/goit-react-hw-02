import Description from './components/Description/Description'
import Feedback from "./components/Feedback/Feedback"
import Notification from './components/Notification/Notification'
import Options from "./components/Options/Options"

import response from "./response.json"
import { useState, useEffect } from 'react'




const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercent = totalFeedback > 0
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div>
      <Description
        name={"Sip Happens Café"}
        description={
          "Please leave your feedback about our service by selecting one of the options below."
        }
      />
      <Options
        totalFeedback={totalFeedback}
        handleReset={handleReset}
        updateFeedback={updateFeedback}
        response={response}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positiveFeedbackPercent={positiveFeedbackPercent}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;

