import { FaUsers, FaPhoneAlt, FaHistory, FaMobileAlt } from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaUsers />,
      title: "Live Contact Data",
      desc: "Fetches real users from an online API and displays them instantly.",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Interactive Calling",
      desc: "Simulate a real call with loading effects and a call-ending option.",
    },
    {
      icon: <FaHistory />,
      title: "Last Called Memory",
      desc: "Automatically remembers your last called user using React Context.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Layout",
      desc: "Beautiful design that adapts smoothly to all screen sizes.",
    },
  ];

  return (
    <div className="home_container">
      <div className="home_content">
        <h2>Website Features</h2>

        <div className="features_dynamic_grid">
          {features.map((item, index) => (
            <div key={index} className="feature_card_dynamic">
              <div className="feature_icon_dynamic">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
