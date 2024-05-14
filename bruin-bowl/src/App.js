import logo from './logo.svg';
import './App.css';
import AnswerBar from './components/AnswerBar.js';
import PageTitle from './components/PageTitle.js';
import QuestionBox from './components/QuestionBox.js';

function App() {
  return (
    <div>
      <>
        <PageTitle title="BruinBowl" />
        <QuestionBox />
        <AnswerBar />
      </>
    </div>
  );
}

export default App;
