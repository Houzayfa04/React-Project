import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div className="home_container">
      <div className="home_content">
        <p>
          This demo webiste is developed by Devrabic. The best arabic community
          for web development!
        </p>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    </div>
  );
}
export default About;
