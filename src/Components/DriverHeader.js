import { useRef } from "react";

export default function DriverHeader({ drivers, setDrivers }) {
  const searchRef = useRef();

  function handleSearch(e) {
    e.preventDefault();
    const searchFirstName = searchRef.current[0].value.toLowerCase();
    setDrivers(
      drivers.filter(
        (driver) => driver.name.first.toLowerCase() === searchFirstName
      )
    );
  }
  return (
    <header>
      <h1>DRIVER MANAGEMENT</h1>
      <form ref={searchRef} onSubmit={handleSearch}>
        <input placeholder="Cari Driver" />
      </form>
    </header>
  );
}
