import { useRef } from "react";
import "./DriverHeader.scss";
export default function DriverHeader({
  drivers,
  setDrivers,
  setStartOffset,
  setEndOffset,
}) {
  const searchRef = useRef();
  function handleSearch(e) {
    e.preventDefault();
    const searchFirstName = searchRef.current[0].value.toLowerCase();

    const newDrivers = drivers.filter((driver) =>
      driver.name.first.toLowerCase().includes(searchFirstName)
    );
    setDrivers(newDrivers);
    setStartOffset(0);
    setEndOffset(5);
  }
  return (
    <header className="driver__header">
      <div className="driver__header-title">
        <h1>DRIVER MANAGEMENT</h1>
        <p>Data driver yang bekerja dengan Anda</p>
      </div>
      <div className="driver__header-form">
        <form ref={searchRef} onSubmit={handleSearch}>
          <input placeholder="Cari Driver" />
        </form>
        <button>TAMBAH DRIVER +</button>
      </div>
    </header>
  );
}
