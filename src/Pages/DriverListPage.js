import { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import DriverCard from "../Components/DriverCard";
import DriverHeader from "../Components/DriverHeader";
import DriverNavigation from "../Components/DriverNavigation";
import DriverService from "../Services/DriverService";
import "./DriverListPage.scss";

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
      <DriverHeader
        drivers={JSON.parse(savedDrivers)}
        setDrivers={setDrivers}
        setStartOffset={setStartOffset}
        setEndOffset={setEndOffset}
      />
      <ScrollContainer className="drivers__list">
        {drivers.slice(startOffset, endOffset).map((driver, index) => (
          <DriverCard
            driver={driver}
            key={index}
            style={{ whiteSpace: "nowrap" }}
          />
        ))}
      </ScrollContainer>

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
