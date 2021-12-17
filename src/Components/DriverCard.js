import DateUtils from "../Utils/DateUtils";
import "./DriverCard.scss";

export default function DriverCard({ driver }) {
  return (
    <div className="drivers__item">
      <header>
        Driver ID <span>{driver.id.value}</span>
      </header>
      <div className="drivers__item-row">
        <img src={driver.picture.medium} alt={driver.name.first} />
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
    </div>
  );
}
