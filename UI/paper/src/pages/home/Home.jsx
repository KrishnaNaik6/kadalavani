import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../apiHelpers/api";
import './home.css'
export default function Home() {
  const [news, setNews] = useState([]);
  let navigate = useNavigate();
  async function loadNews() {
    try {
      const res = await api.get("news/articles");
      console.log(res);
      setNews(res.data.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    console.log("loading news");
    loadNews();
  }, []);
  return (
    <div
      style={{ flex: 1, padding: 10, overflow: "hidden" }}
    >
      {news.map((n, i) => (
        <div
          key={"news-" + i}
          className="news"
          style={{
            marginBottom: 10,
            borderBottom: "1px solid #9FA8DA",
            display: "flex",
            padding: 20,
          }}
          onClick={(e) => navigate("/news/" + n.id)}
        >
          <div>
            <img
              style={{ border: "1px solid #ccc" }}
              src={"http://localhost:5001/" + n.images[0]}
              width="100"
            />
          </div>
          <div style={{ marginLeft: 15 }}>
            <div style={{ marginLeft: 0, fontWeight: 500 }}>
              {n.title.substring(0, 50)}
            </div>
            <div
              style={{
                marginLeft: 0,
                fontSize: 12,
                textAlign: "justify",
                color: "#666",
              }}
            >
              {n.content.substring(0, 150)}
            </div>
            <div style={{ textAlign: "right", fontSize: 12, color: "#777" }}>
              {new Date(n.created_at).toDateString() +
                " " +
                new Date(n.created_at).getUTCHours() +
                ":" +
                new Date(n.created_at).getUTCMinutes()}
            </div>
            <div style={{ color: "#888", fontSize: 12 }}>Like || share</div>
          </div>
        </div>
      ))}
    </div>
  );
}
