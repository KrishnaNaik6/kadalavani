import share from "../assets/images/share.svg";
import saveSmall from "../assets/images/saveSmall.svg";
const MainNewsCard = ({ image, news, key }) => (
  <div>
    <div
      style={{
        height: 180,
        background: "#ccc",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={image} height={180} width={"100%"} />
    </div>
    <div style={{ textAlign: "left", marginTop: 10, color: "#222" }}>
      {news}
    </div>
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}></div>
      <div style={{ padding: 5, cursor: "pointer" }}>
        <img src={share} />
      </div>
      <div style={{ padding: 5, cursor: "pointer" }}>
        <img src={saveSmall} />
      </div>
    </div>
    <div
      style={{ border: "1px solid #ddd", marginBottom: 20, marginTop: 5 }}
    ></div>
  </div>
);

export default MainNewsCard;
