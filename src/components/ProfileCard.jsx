import { useState } from "react";

export default function ProfileCard({ name, studentId, major }) {
  const [likes, setLikes] = useState(0);

  const card = {
    width: 360,
    margin: "24px auto",
    padding: "20px",
    borderRadius: 16,
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    background: "#fff",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
  };

  const title = { margin: 0, fontSize: 20, fontWeight: 700 };
  const meta = { margin: "12px 0 20px", lineHeight: 1.6, color: "#444" };
  const btn = {
    border: "none",
    padding: "10px 14px",
    borderRadius: 10,
    cursor: "pointer",
    fontSize: 14,
  };

  return (
    <div style={card}>
      <h2 style={title}>👤 프로필</h2>
      <div style={meta}>
        <div><b>이름:</b> {name}</div>
        <div><b>학번:</b> {studentId}</div>
        <div><b>전공:</b> {major}</div>
      </div>

      <button style={btn} onClick={() => setLikes((n) => n + 1)}>
        👍 좋아요 {likes}
      </button>
    </div>
  );
}