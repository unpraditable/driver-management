import "./Header.scss";
export default function Header({ onHamburgerClick }) {
  return (
    <header className="shipper__header">
      <button
        onClick={onHamburgerClick}
        className="shipper__header-hamburger d-hide"
      >
        <img src="hamburger.png" alt="Hamburger Button" />
      </button>
      <div className="shipper__header-logo">
        <img src="logo/shipper-logo.png" alt="Shipper Logo" />
      </div>

      <div className="shipper__header-user">
        <p className="m-hide">
          Hello, <span>Shipper User</span>
        </p>
        <img src="user.png" alt="Shipper User" />
      </div>
    </header>
  );
}
