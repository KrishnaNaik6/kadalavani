import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import api from "../../apiHelpers/api";
export default function News() {
  const [news, setNew] = useState();
  let navigate = useNavigate();
  const { id } = useParams();
  async function loadNews() {
    try {
      const res = await api.get("news/articles/" + id);
      console.log(res.data);
      setNew(res.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    console.log("id", id);
    loadNews();
  }, [id]);
  return (
    <div style={{ flex: 1, overflowY: "scroll" }}>
      <div style={{ padding: 5 }} onClick={(e) => navigate("/home")}>
        <div style={{ padding: 2, color: "blue" }}>
          <ArrowLeftOutlined />
        </div>
      </div>
      <div style={{ padding: 10 }}>
        <img
          src={"http://localhost:5001/" + news?.images[0]}
          style={{ width: "100%" }}
        />
        <h3>{news?.title}</h3>
        <div>{news?.content}</div>
      </div>
      {/* news details page {id}
      <div>{JSON.stringify(news)}</div> */}
    </div>
  );
}
