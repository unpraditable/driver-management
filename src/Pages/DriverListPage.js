import { useEffect, useState } from "react";
import DriverService from "../Services/DriverService";
import DateUtils from "../Utils/DateUtils";

export default function DriverListPage() {
  const savedDrivers = localStorage.getItem("drivers");
  const [drivers, setDrivers] = useState(
    savedDrivers ? JSON.parse(savedDrivers) : []
  );
  const [startOffset, setStartOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(5);

  function prevButtonHandler() {
    const newStartOffset = startOffset - 5 > 0 ? startOffset - 5 : 0;
    const newEndOffset = endOffset - 5 > 5 ? endOffset - 5 : 5;

    setStartOffset(newStartOffset);
    setEndOffset(newEndOffset);
  }

  function nextButtonHandler() {
    setStartOffset(startOffset + 5);
    setEndOffset(endOffset + 5);
  }

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
          <li key={driver.email} className="drivers__item">
            <header>
              Driver ID <span>{driver.id.value}</span>
            </header>
            <div className="drivers__item-row">
              <img src={driver.picture.medium} />
            </div>
            <div className="drivers__item-row">
              <h4>Nama Driver</h4>
              <p>
                {driver.name.first}, {driver.name.last}
              </p>
            </div>
            <div className="drivers__item-row">
              <h4>Telepon</h4>
              <p>{driver.cell}</p>
            </div>
            <div className="drivers__item-row">
              <h4>Email</h4>
              <p>{driver.email}</p>
            </div>
            <div className="drivers__item-row">
              <h4>Tanggal Lahir</h4>
              <p>{DateUtils.convertDate(driver.dob.date)}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="drivers__navigation">
        <button disabled={startOffset <= 0} onClick={prevButtonHandler}>
          Previous
        </button>
        <button
          disabled={endOffset >= drivers.length}
          onClick={nextButtonHandler}
        >
          Next
        </button>
      </div>
    </div>
  );
}
