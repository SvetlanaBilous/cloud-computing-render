import './ResultBox.css'; // если ты хочешь стилизовать отдельно (опционально)

function ResultBox({ sentiment }) {
  return (
    <div className="ResultBox">
      <p>
        {sentiment
          ? `Detected sentiment: ${sentiment}`
          : 'No sentiment analyzed yet.'}
      </p>
    </div>
  );
}

export default ResultBox;