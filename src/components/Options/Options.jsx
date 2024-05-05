import css from "./Options.module.css"


const Options = ({
    totalFeedback,
    handleReset,
    updateFeedback,
    response: { good, neutral, bad, reset }
}) => {
    return (
        <div className={css.wrapperButtons}>
            
            <button onClick={() => updateFeedback("good")} >{good}</button>
            <button onClick={() => updateFeedback("neutral")} >{neutral}</button>
            <button onClick={() => updateFeedback("bad")} >{bad}</button>
            {totalFeedback > 0 && (
                <button onClick={handleReset} type="button">{reset}</button>
            )}

        </div>
    );
};
export default Options


