import logo from "./logo.svg";
import "./App.scss";
import DriverListPage from "./Pages/DriverListPage";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <DriverListPage />
    </div>
  );
}

export default App;
