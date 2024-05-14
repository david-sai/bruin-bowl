import logo from './logo.svg';
import './App.css';
import AnswerBar from './components/AnswerBar.js';
import PageTitle from './components/PageTitle.js';
import QuestionBox from './components/QuestionBox.js';
import Timer from './components/Timer.js';

function App() {
  return (
    <div>
      <>
        <PageTitle title="BruinBowl" />
        <Timer />
        <QuestionBox />
        <AnswerBar />
      </>
    </div>
  );
}

export default App;
