import "./Sidebar.scss";

export default function Sidebar({ isShown }) {
  return (
    <div className={`shipper__sidebar ${isShown && "show"}`}>
      <ul className="shipper__sidebar-list">
        <li>
          <img src="home.png" alt="Beranda" />
          <span>Beranda</span>
        </li>
        <li className="active">
          <img src="user-red.png" alt="Driver Management" />
          <span>Driver Management</span>
        </li>
        <li>
          <img src="calendar.png" alt="Pickup" />
          <span>Pickup</span>
        </li>
      </ul>
    </div>
  );
}
