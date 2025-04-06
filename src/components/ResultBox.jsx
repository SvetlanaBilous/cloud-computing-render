// Component to display the sentiment analysis result
function ResultBox({ sentiment }) {
    return (
      <div className="ResultBox">
        <p>
          {/* If a sentiment is provided, display it. Otherwise, show a default message */}
          {sentiment
            ? `Detected sentiment: ${sentiment}`
            : 'No sentiment analyzed yet.'}
        </p>
      </div>
    );
  }
  
  export default ResultBox;