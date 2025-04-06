import './App.css';
import InputForm from './components/InputForm';
import ResultBox from './components/ResultBox';

function App() {
  return (
    <div className="App">
      <h1>Sentiment Analyzer</h1>
      <InputForm />
      <ResultBox />
    </div>
  );
}

export default App;