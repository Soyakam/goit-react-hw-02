import css from "./Feedback.module.css";

const Feedback = ({
  feedback: { good, neutral, bad },
  total,
  positiveFeedbackPercent,
}) => {
  return (
    <ul className={css.FeedbackContainer}>
      <li className="FeedbackItem">Good: {good}</li>
      <li className="FeedbackItem">Neutral: {neutral}</li>
      <li className="FeedbackItem">Bad: {bad}</li>
      <li className="FeedbackItem">Total: {total}</li>
      <li className="FeedbackItem">Positive Feedback: {positiveFeedbackPercent}%</li>
    </ul>
  );
};

export default Feedback;