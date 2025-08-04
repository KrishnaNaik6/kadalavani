import profileIcom from "../assets/images/footer/profile.svg";
import searchIcom from "../assets/images/footer/search.svg";
import videoIcon from "../assets/images/footer/video.svg";
import bookmarkIcon from "../assets/images/footer/bookmark.svg";
const Footer = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1, padding: 20, cursor: "pointer" }}>
        <img src={profileIcom} />
      </div>
      <div style={{ flex: 1, padding: 20, cursor: "pointer" }}>
        <img src={searchIcom} />
      </div>
      <div style={{ flex: 1, padding: 20, cursor: "pointer" }}>
        <img src={videoIcon} />
      </div>
      <div style={{ flex: 1, padding: 20, cursor: "pointer" }}>
        <img src={bookmarkIcon} />
      </div>
    </div>
  );
};

export default Footer;
