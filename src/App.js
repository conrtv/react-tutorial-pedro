import './App.css';

function App() {
  return (
    <div className="App">
    <Job salary = {12000} position = "Senior SDE" company = "Amazon" />
    <Job salary = {70000} position = "Junior SDE" company = "Google" />
    <Job salary = {230000} position = "Project Manager" company = "Amazon" />
    </div>
  );
}

export default App;


const Job = (props) => {
  return (
  <div>
    <h1>{props.salary}</h1>
    <h1>{props.position}</h1>
    <h1>{props.company}</h1>
  </div>
  );
};