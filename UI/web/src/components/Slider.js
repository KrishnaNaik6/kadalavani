import { useState } from "react";

const menus = [
  {
    title: "ನ್ಯೂಸ್",
    menus: [
      {
        title: "ರಾಜ್ಯ",
      },
      {
        title: "ದೇಶ",
      },
      {
        title: "ವಿದೇಶ",
      },
      {
        title: "ಕೇಂದ್ರ ಬಜೆಟ್",
      },
      {
        title: "ರಾಜ್ಯ ಬಜೆಟ್",
      },
    ],
  },
  {
    title: "ಜಿಲ್ಲೆ",
  },
  {
    title: "ಕ್ರೀಡೆ ",
  },
  {
    title: "ಕೃಷಿ",
  },
  {
    title: "ಲೈಫ್ ಸ್ಟೈಲ್",
  },
  {
    title: "ಸಿನಿಮಾ",
  },
];
const Slider = () => {
  const [openedMenue, setOpenedMenu] = useState(null);
  return (
    <div>
      {menus.map((d, i) => {
        return (
          <div
            key={"slide1" + i}
            style={{
              padding: 10,
              textAlign: "left",
              borderBottom: "1px solid #ccc",
              fontWeight: 600,
            }}
          >
            {d.title}
            {d.menus && d.menus.length > 0 && (
              <div>
                {d.menus.map((sm, k) => {
                  return (
                    <div
                      key={"sm-" + i + "-" + k}
                      style={{
                        padding: 5,
                        marginLeft: 10,
                        fontSize: 12,
                        borderBottom: "1px solid #f1f1f1",
                        color: "#555",
                      }}
                    >
                      {sm.title}{" "}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
