import ProfileCard from "./components/ProfileCard";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <ProfileCard
        name="김태우"
        studentId="2024208017"
        major="인공지능학과"
      />
    </div>
  );
}