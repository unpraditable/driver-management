import { useEffect, useRef, useState } from "react";
import DriverCard from "../Components/DriverCard";
import DriverNavigation from "../Components/DriverNavigation";
import DriverService from "../Services/DriverService";

export default function DriverListPage() {
  const savedDrivers = localStorage.getItem("drivers");
  const [drivers, setDrivers] = useState(
    savedDrivers ? JSON.parse(savedDrivers) : []
  );
  const searchRef = useRef();
  const [startOffset, setStartOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(5);

  useEffect(() => {
    DriverService.fetchDrivers().then((result) => {
      if (!savedDrivers) {
        localStorage.setItem("drivers", JSON.stringify(result));
        setDrivers(result);
      }
    });
  }, [savedDrivers]);

  function handleSearch(e) {
    e.preventDefault();
    const searchFirstName = searchRef.current[0].value.toLowerCase();
    setDrivers(
      drivers.filter(
        (driver) => driver.name.first.toLowerCase() === searchFirstName
      )
    );
    console.log(searchFirstName);
  }

  return (
    <div className="drivers">
      <header>
        <h1>DRIVER MANAGEMENT</h1>
        <form ref={searchRef} onSubmit={handleSearch}>
          <input placeholder="Cari Driver" />
        </form>
      </header>
      <ul className="drivers__list">
        {drivers.slice(startOffset, endOffset).map((driver) => (
          <DriverCard driver={driver} />
        ))}
      </ul>

      <DriverNavigation
        startOffset={startOffset}
        setStartOffset={setStartOffset}
        endOffset={endOffset}
        setEndOffset={setEndOffset}
        drivers={drivers}
      />
    </div>
  );
}
