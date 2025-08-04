import { useState, useEffect } from "react";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import api from "../apiHelpers/api";
import './index.css'

export default function Header() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");

  async function loadCategories() {
    try {
      const res = await api.get("/news/categories?limit=100");
      console.log(res);
      setCategories(res.data?.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    loadCategories();
  }, []);
  const [categories, setCategories] = useState([]);
  const [hotLinks, setHotLinks] = useState([
    { name: { en: "India", ka: "ಇಬ್ಬರು ನಕ್ಸಲರ ವಿರುದ್ಧ ಎನ್ಐಎ ಆರೋಪ ಪಟ್ಟಿ" } },
    {
      name: {
        en: "State",
        ka: "ಬಿಜೆಪಿಯಲ್ಲಿ ಮತ್ತೆ ಯಡಿಯೂರಪ್ಪ ಪರ್ವ:  ಸಂತೋಷ್‌– ಜೋಶಿಗೆ ಹಿನ್ನಡೆ",
      },
    },
    {
      name: {
        en: "State",
        ka: "ಎಲ್.ಕೆ.ಅಡ್ವಾಣಿಗೆ 'ಭಾರತ ರತ್ನ': ಪ್ರಧಾನಿ ನರೇಂದ್ರ ಮೋದಿ ಘೋಷಣೆ",
      },
    },
  ]);
  const [language, setLanguage] = useState("ka");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div style={{ borderBottom: "1px solid #ccc" }}>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MenuOutlined style={{ fontSize: 20 }} onClick={showDrawer} />
          <Drawer
            // title="Basic Drawer"
            placement={placement}
            closable={false}
            onClose={onClose}
            open={open}
            key={placement}
          >
            {categories
              ?.filter((d) => !d.parent_id)
              .map((d, i) => (
                <div
                  style={{
                    padding: "5px 15px",
                    margin: "5px 0px",
                    fontSize: 18,
                    color: "#666",
                    borderBottom: "1px solid #ccc",
                  }}
                  key={i}
                >
                  {d.name[language]}
                </div>
              ))}
          </Drawer>
        </div>
        <div
          style={{
            fontSize: 45,
            color: "red",
            fontWeight: 600,
            textAlign: "center",
            padding: 10,
            paddingTop: 15,
            flex: 1,
          }}
        >
          ಕಡಲವಾಣಿ
        </div>
        <div
          style={{
            width: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <UserOutlined style={{ fontSize: 20 }} />
        </div>
      </div>
      <div
        style={{
          background: "#777",
          padding: 5,
          display: "flex",
          overflowX: "hidden",
          color: "#fff",
        }}
      >
        {categories
          ?.filter((d) => !d.parent_id)
          .map((d, i) => (
            <div
            className="categories"
              style={{
                padding: "2px 15px",
                margin: "5px 0px",
                borderRight: "1px solid #ccc",
              }
            }
              
              key={i}
            >
              {d.name[language]}
            </div>
          ))}
      </div>
      <div
        style={{
          background: "#ddd",
          padding: 5,
          display: "flex",
          overflow: "hidden",
          color: "#fff",
        }}
      >
        {hotLinks.map((d, i) => (
          <div
            style={{
              padding: "2px 15px",
              margin: "5px 0px",
              borderRight: "1px solid #ccc",
              //   display: "table-row",
              minWidth: d.name[language].length * 8,
              //   minWidth: 1500,
              //   overflow: "auto",
              color: "blue",
            }}
            key={"hotLinks" + i}
          >
            {d.name[language]}
          </div>
        ))}
      </div>
    </div>
  );
}
