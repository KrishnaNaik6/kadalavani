import React, { useState } from "react";
import Header from "../components/Header";
import HomeMainContainer from "../components/HomeMainContainer";
import Footer from "../components/Footer";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        height: "100%",
        width: "100%",
        background: "#999",
      }}
    >
      <div
        style={{
          ...{
            maxWidth: 500,
            height: "100%",
            border: "1px solid #999",
            flex: 1,
            flexDirection: "column",
            display: "flex",
            background: "#fff",
            overflow: "hidden",
          },
        }}
      >
        <Header showDrawer={showDrawer} open={open} setOpen={setOpen} />
        <HomeMainContainer
          open={open}
          setOpen={setOpen}
          showDrawer={showDrawer}
        />
        <Footer />
      </div>
    </div>
  );
};
export default HomePage;
