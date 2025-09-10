import ProfileCard from "./components/ProfileCard";

export default function App() {
  return (
    <>
      {/* 과제 요구: Props(name, studentId, major) 전달 */}
      <ProfileCard
        name="김태우"
        studentId="2024208017"
        major="인공지능학과"
      />
    </>
  );
}