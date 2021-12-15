import "./App.scss";
import DriverListPage from "./Pages/DriverListPage";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { useState } from "react";

function App() {
  const [isSidebarShown, setIsSideBarShown] = useState(false);

  function onHamburgerClick() {
    setIsSideBarShown(!isSidebarShown);
    document.body.classList.toggle("lock-scroll");
  }
  return (
    <div className="shipper">
      <Header onHamburgerClick={onHamburgerClick} />
      <div className="shipper__body">
        <Sidebar isShown={isSidebarShown} />
        <DriverListPage />
      </div>
    </div>
  );
}

export default App;
