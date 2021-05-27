import logo from "./logo.svg";
import "./App.scss";
import Card from "./Components/Card/Card";
import ExerciseCard from "./Components/ExerciseCard/ExerciseCard";
import ProgressBar from "./Components/ProgressBar";
import data from "./daily_progress_data.json";

function App() {
  const bookmarkedCards = data
    .filter(d => d.bookmarked)
    .map(c => <ExerciseCard exercise={c} />);

  const totalHours = data.map(d => JSON.parse(d.evaluation).timeSpent).reduce((a, b) => a + b, 0)/3600;

  const totalDataLength = data.length;

  const AbsolutbeloppLength = data.filter(d => d.category === 'Absolutbelopp').length;

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <img src="https://d1mgntrf3vaj6d.cloudfront.net/images/logo.svg" />
          <h1>Your daily overview</h1>
        </div>
        <div>
          <h3>Today</h3>
          <Card style={{ backgroundColor: "beige" }}>
            {totalDataLength}
          </Card>
          <Card style={{ backgroundColor: "pink" }}>
            {totalHours}
          </Card>
          <h3>Absolutbelopp</h3>
          <ProgressBar progressRatio={AbsolutbeloppLength/totalDataLength}/>
          <h3>Bookmarked</h3>
          {bookmarkedCards}
          <h3>Notes</h3>
          <h3>All Exercises</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
