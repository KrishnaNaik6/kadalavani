import Header from "../components/Header";

const MainPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: 500,
          height: "100%",
          border: "1px solid #999",
          flex: 1,
        }}
      >
        <Header />
      </div>
    </div>
  );
};
export default MainPage;
