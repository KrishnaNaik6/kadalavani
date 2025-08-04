import MainPageTitle from "./MainPageTitle";
import React, { useState } from "react";
import MainNewsCard from "./MainNewsCard";
import { Button, Drawer, theme } from "antd";
import Slider from "../components/Slider";
const containerStyle = {
  position: "relative",
  overflow: "hidden",
  textAlign: "center",
};
const HomeMainContainer = ({ open, setOpen, showDrawer }) => {
  const { token } = theme.useToken();
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div
      style={{
        flex: 1,
        overflow: "scroll",
        border: "1px solid #ccc",
        ...containerStyle,
      }}
    >
      <MainPageTitle title={"ಟಾಪ್ ಸುದ್ದಿ"} />
      <div style={{ padding: 20, paddingTop: 0 }}>
        {[
          {
            images: [
              "https://images.tv9kannada.com/wp-content/uploads/2023/09/amla-aloe-vera.jpg?w=1000",
            ],
            news: "ನೆಲ್ಲಿಕಾಯಿ -ಅಲೋವೆರಾ ಜ್ಯೂಸ್ ರೋಗನಿರೋಧಕ ಶಕ್ತಿಯನ್ನು ಹೆಚ್ಚಿಸಲು ಮತ್ತು ಹೃದಯ, ಮೆದುಳಿನಂತಹ ಪ್ರಮುಖ ಅಂಗಗಳ ಕಾರ್ಯಗಳನ್ನು ವರ್ಧಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಆಮ್ಲಾ-ಅಲೋವೆರಾ ಜ್ಯೂಸ್ ಕಣ್ಣಿನ ಒತ್ತಡವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.",
          },
          {
            images: [
              "https://media.kannadaprabha.com/uploads/user/imagelibrary/2023/9/10/w600X390/brazil.jpg?w=576&dpr=2.0",
            ],
            news: "ದೆಹಲಿಯಲ್ಲಿ ಜಿ20 ಶೃಂಗಸಭೆ ಅಂತ್ಯ, ಮುಂದಿನ ವರ್ಷ ಬ್ರೆಜಿಲ್ ನಲ್ಲಿ: ಅಧಿಕಾರ ದಂಡವನ್ನು ಬ್ರೆಜಿಲ್ ಅಧ್ಯಕ್ಷರಿಗೆ ಹಸ್ತಾಂತರಿಸಿದ ಪ್ರಧಾನಿ ಮೋದಿ",
          },
          {
            images: [
              "https://media.kannadaprabha.com/uploads/user/imagelibrary/2022/2/25/w900X450/russia.jpg?w=900&dpr=2.0",
            ],
            news: "ನವದೆಹಲಿ: ಭಾರತದ ಅಧ್ಯಕ್ಷತೆಯಲ್ಲಿ ನಡೆದ ಜಿ-20 ಶೃಂಗಸಭೆ ಹಲವು ವಿಧಗಳಲ್ಲಿ ಮಹತ್ವದ ತಿರುವುಗಳನ್ನೊಳಗೊಂಡ ಸಭೆಯಾಗಿದ್ದು, ಸವಾಲುಗಳನ್ನು ಮೆಟ್ಟಿ ಮುನ್ನಡೆಯಲು ದಾರಿ ತೋರಿಸಿದೆ ಎಂದು ರಷ್ಯಾ ಹೇಳಿದೆ.",
          },
          {
            images: [
              "https://media.kannadaprabha.com/uploads/user/imagelibrary/2023/9/7/w900X450/patre-new.jpg?w=900&dpr=2.0",
            ],
            news: "ನಮ್ಮ ಮನೆಯ ಹಿತ್ತಲಲ್ಲೇ ಸಿಗುವ ಗಿಡಗಳು ಅನೇಕ ಖಾಯಿಲೆಗಳನ್ನು ಶಮನ ಮಾಡುವ ಶಕ್ತಿ ಹೊಂದಿರುತ್ತವೆ. ಹಿಂದಿನ ಕಾಲದ ಜನರು ಆಯುರ್ವೇದ ಔಷಧಗಳನ್ನು ಇಂತಹ ಗಿಡ ಗಂಟಿ, ಬೇರುಗಳಿಂದಲೇ ತಯಾರಿಸುತ್ತಿದ್ದರು. ಅಂತಹ ಒಂದು ಗಿಡಗಳಲ್ಲಿ ದೊಡ್ಡಪತ್ರೆಯೂ ಒಂದು.",
          },
          {
            images: [
              "https://media.kannadaprabha.com/uploads/user/imagelibrary/2023/7/30/w900X450/Vitamin-D-deficiency-can-ca.jpg?w=900&dpr=2.0",
            ],
            news: "ರೋಗನಿರೋಧಕ ಶಕ್ತಿ ಕಡಿಮೆಯಾದವರಲ್ಲಿ ತೀವ್ರವಾದ ಸೋಂಕಿಗೆ ಕಾರಣವಾದ ಕೋವಿಡ್‌ನಂತೆಯೇ, ತೀವ್ರವಾದ ಕಂಜಂಕ್ಟಿವಿಟಿಸ್ (ಗುಲಾಬಿ ಕಣ್ಣಿನ ಸಮಸ್ಯೆ) ಪ್ರಕರಣಗಳು ವಿಟಮಿನ್ ಡಿ ಕೊರತೆಯಿರುವ ರೋಗಿಗಳ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುತ್ತಿವೆ ಎಂದು ತಜ್ಞರು ಗಮನಿಸಿದ್ದಾರೆ.",
          },
          {
            images: [
              "https://media.kannadaprabha.com/uploads/user/imagelibrary/2023/5/20/w900X450/foreign-reserves.jpg?w=900&dpr=2.0",
            ],
            news: "ಕಳೆದ ವಾರದಲ್ಲಿ ಒಟ್ಟಾರೆ ಮೀಸಲು 30 ಮಿಲಿಯನ್ ಡಾಲರ್ ಗೆ ಇಳಿಕೆಯಾಗಿದೆ. ಅಕ್ಟೋಬರ್ 2021 ರಲ್ಲಿ, ದೇಶದ ವಿದೇಶಿ ವಿನಿಮಯ ಮೀಸಲು ಸಾರ್ವಕಾಲಿಕ ಗರಿಷ್ಠ $645 ಬಿಲಿಯನ್ ತಲುಪಿತ್ತು. ಕಳೆದ ವರ್ಷದಿಂದ ಪ್ರಮುಖವಾಗಿ ಜಾಗತಿಕ ಬೆಳವಣಿಗೆಗಳಿಂದ ಉಂಟಾದ ಒತ್ತಡಗಳ ನಡುವೆ ರೂಪಾಯಿಯ ಮೌಲ್ಯವನ್ನು ರಕ್ಷಿಸಲು ಕೇಂದ್ರೀಯ ಬ್ಯಾಂಕ್ ಮೀಸಲನ್ನು ಬಳಸಿದ್ದರಿಂದ  ಮೀಸಲು ಕುಸಿದಿದೆ. ",
          },
        ].map((d, i) => (
          <div key={"news" + i}>
            <MainNewsCard image={d.images[0]} news={d.news} />
          </div>
        ))}
      </div>
      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        getContainer={false}
      >
        <Slider />
      </Drawer>
    </div>
  );
};
export default HomeMainContainer;
