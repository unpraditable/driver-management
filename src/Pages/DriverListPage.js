import { useEffect, useState } from "react";
import DriverCard from "../Components/DriverCard";
import DriverNavigation from "../Components/DriverNavigation";
import DriverService from "../Services/DriverService";

export default function DriverListPage() {
  const savedDrivers = localStorage.getItem("drivers");
  const [drivers, setDrivers] = useState(
    savedDrivers ? JSON.parse(savedDrivers) : []
  );
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

  return (
    <div className="drivers">
      <header>
        <h1>DRIVER MANAGEMENT</h1>
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
