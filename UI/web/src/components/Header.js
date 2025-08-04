import Logo from "../assets/images/logo.svg";
import Ham from "../assets/images/ham.svg";
import close from "../assets/images/close.svg";
import Bell from "../assets/images/bell.svg";
const Header = ({ showDrawer, open, setOpen }) => {
  return (
    <div
      style={{
        padding: 10,
        background: "#EDEDED",
        display: "flex",
        boxShadow: "0px 3px 14px 3px #ccc",
      }}
    >
      {!open && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 10px",
            cursor: "pointer",
          }}
          onClick={showDrawer}
        >
          <img src={Ham} />
        </div>
      )}
      {open && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 10px",
            cursor: "pointer",
          }}
          onClick={(e) => setOpen(false)}
        >
          <img src={close} />
        </div>
      )}
      <div style={{ flex: 1 }}>
        <img src={Logo} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 10px",
        }}
      >
        <img src={Bell} />
      </div>
    </div>
  );
};

export default Header;
